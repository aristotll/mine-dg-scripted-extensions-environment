;    property(name: 'SELECTION', type: 'com.intellij.util.containers.JBIterable<com.intellij.database.model.DasObject>', doc: 'the selected object')
(clojure.core/declare ^com.intellij.util.containers.JBIterable SELECTION)
(clojure.core/declare ^com.intellij.database.extensions.Clipboard CLIPBOARD)
(clojure.core/declare ^com.intellij.database.extensions.ScriptLogger LOG)
(clojure.core/declare ^com.intellij.database.extensions.Files FILES)
(clojure.core/declare ^com.intellij.openapi.project.Project PROJECT)
(clojure.core/declare ^com.intellij.database.dialects.DatabaseDialect DIALECT)
(clojure.core/declare ^com.intellij.database.psi.DbTableImpl TABLE)
;property(name: "ALL_COLUMNS", type: "java.util.List<com.intellij.database.extensions.DataColumn>")
;    //    public static final Binding<List<? extends DataColumn>> ALL_COLUMNS = new Binding("ALL_COLUMNS");
(clojure.core/declare ^java.util.List ALL_COLUMNS)
;//    public static final Binding<List<? extends DataColumn>> COLUMNS = new Binding("COLUMNS");
;    //    public static final Binding<List<? extends DataColumn>> COLUMNS = new Binding("COLUMNS");
(clojure.core/declare ^java.util.List COLUMNS)
(clojure.core/declare ^com.intellij.database.extensions.ValueFormatter FORMATTER)
(clojure.core/declare ^java.lang.Appendable OUT)
(clojure.core/declare ^com.intellij.database.extensions.DataStream ROWS)
(clojure.core/declare ^java.lang.Boolean TRANSPOSED)

(def usings "using System;")
(def default-type "string")
(def ^String b "1")
;(println (.toLowerCase b))
(def type-mappings
  [
   [["bit"] "bool"]
   [["tinyint"] "byte"]
   [["uniqueidentifier" "uuid"] "Guid"]
   [["int" "integer"] "int"]
   [["bigint"] "long"]
   [["char"] "char"]
   [["varbinary" "image"] "byte[]" true] ; cannot be null
   [["double" "float" "real"] "double"]
   [["decimal" "money" "numeric" "smallmoney"] "decimal"]
   [["datetime" "datetime2" "timestamp" "date" "time"] "DateTime"]
   [["datetimeoffset"] "DateTimeOffset"]
   ])
(def new-line "\r\n")

(defn- poco-name [name]
       (apply str (map clojure.string/capitalize (re-seq #"(?:[A-Z]+)?[a-z\d]*" name))))

(defn- poco-type [data-type is-null]
       (let [spec                (.. data-type getSpecification toLowerCase)
             spec-matches?       (fn [pattern] (= (re-find #"^\w+" spec) pattern))
             mapping-matches?    (fn [[ps t n]] (when (some spec-matches? ps) [t n]))
             [type cant-be-null]  (some mapping-matches? type-mappings)
             nullable-type       (if (and type (not cant-be-null) is-null) (str type "?") type)]
            (or nullable-type default-type)))

(defn- field-infos [table]
       (let [columns    (com.intellij.database.util.DasUtil/getColumns table)
             field-info (fn [column] {:name (poco-name (.getName column))
                                      :type (poco-type (.getDataType column) (not (.isNotNull column)))})]
            (map field-info columns)))

(defn- property-text [field-info]
       (let [type  (:type field-info)
             name  (:name field-info)]
            (str "  public " type " " name " { get; set; } " new-line)))

(defn- poco-text [class-name fields]
       (apply str (flatten
                    [usings new-line new-line
                     "public class " class-name " " new-line "{" new-line
                     (interpose new-line (interleave (map property-text fields)))
                     "}" new-line])))

(defn- generate-poco [directory table]
       (let [class-name (poco-name (.getName table))
             fields     (field-infos table)
             file       (java.io.File. directory (str class-name ".cs"))
             text       (poco-text class-name fields)]
            (com.intellij.openapi.util.io.FileUtil/writeToFile file text)))

(defn- generate-pocos [directory]
       (let [table? (partial instance? com.intellij.database.model.DasTable)]
            (doseq [table (filter table? SELECTION)]
                   (generate-poco directory table))))


(.chooseDirectoryAndSave FILES
                         "Choose directory"
                         "Choose where to generate POCOs to"
                         (proxy [com.intellij.util.Consumer] []
                                (consume [directory]
                                         (generate-pocos directory)
                                         (.refresh FILES directory))))