;    property(name: 'SELECTION', type: 'com.intellij.util.containers.JBIterable<com.intellij.database.model.DasObject>', doc: 'the selected object')
(declare ^com.intellij.util.containers.JBIterable SELECTION)
(declare ^com.intellij.database.extensions.Clipboard CLIPBOARD)
(declare ^com.intellij.database.extensions.ScriptLogger LOG)
(declare ^com.intellij.database.extensions.Files FILES)
(declare ^com.intellij.openapi.project.Project PROJECT)
(declare ^com.intellij.database.dialects.DatabaseDialect DIALECT)
(declare ^com.intellij.database.psi.DbTableImpl TABLE)
;property(name: "ALL_COLUMNS", type: "java.util.List<com.intellij.database.extensions.DataColumn>")
;    //    public static final Binding<List<? extends DataColumn>> ALL_COLUMNS = new Binding("ALL_COLUMNS");
(declare ^java.util.List ALL_COLUMNS)
;//    public static final Binding<List<? extends DataColumn>> COLUMNS = new Binding("COLUMNS");
;    //    public static final Binding<List<? extends DataColumn>> COLUMNS = new Binding("COLUMNS");
(declare ^java.util.List COLUMNS)
(declare ^com.intellij.database.extensions.ValueFormatter FORMATTER)
(declare ^java.lang.Appendable OUT)
(declare ^com.intellij.database.extensions.DataStream ROWS)
(declare ^java.lang.Boolean TRANSPOSED)