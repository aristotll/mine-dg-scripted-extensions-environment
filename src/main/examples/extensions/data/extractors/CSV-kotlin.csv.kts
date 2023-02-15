import com.intellij.database.dialects.DatabaseDialect
import com.intellij.database.extensions.Clipboard
import com.intellij.database.extensions.*
import com.intellij.database.model.DasObject
import com.intellij.database.psi.DbTableImpl
import com.intellij.openapi.project.Project
import javax.script.Bindings

// 2023-02-15 23:09:04,848 [4237225]   INFO - STDOUT - TABLE = copy_trade_follower_report_statistics: table, PROJECT = Project(name=mine-dg-scripted-extensions-environment, containerState=COMPONENT_CREATED, componentStore=/Users/sh00636ml/Mine/mine-dg-scripted-extensions-environment), DIALECT = com.intellij.database.dialects.mysql.MysqlDialect@55199da8[MYSQL], FORMATTER = com.intellij.database.extractors.ScriptDataExtractor$1@147591ae, ALL_COLUMNS = [com.intellij.database.extractors.DataColumnImpl@79c2df1, com.intellij.database.extractors.DataColumnImpl@478bd0de, com.intellij.database.extractors.DataColumnImpl@5e66f15a, com.intellij.database.extractors.DataColumnImpl@6626e3d9, com.intellij.database.extractors.DataColumnImpl@b3a949, com.intellij.database.extractors.DataColumnImpl@19a794a1, com.intellij.database.extractors.DataColumnImpl@70224aee, com.intellij.database.extractors.DataColumnImpl@21cb4718, com.intellij.database.extractors.DataColumnImpl@3c2f5b89, com.intellij.database.extractors.DataColumnImpl@1988c231, com.intellij.database.extractors.DataColumnImpl@7b1f9ed4, com.intellij.database.extractors.DataColumnImpl@97e528, com.intellij.database.extractors.DataColumnImpl@462205a0, com.intellij.database.extractors.DataColumnImpl@1964de1f, com.intellij.database.extractors.DataColumnImpl@1e0a1ad9, com.intellij.database.extractors.DataColumnImpl@210b0295, com.intellij.database.extractors.DataColumnImpl@77521c11], COLUMNS = [com.intellij.database.extractors.DataColumnImpl@4879b0c2, com.intellij.database.extractors.DataColumnImpl@6ebb7c6, com.intellij.database.extractors.DataColumnImpl@7f0d0224, com.intellij.database.extractors.DataColumnImpl@18d83b40, com.intellij.database.extractors.DataColumnImpl@1da27739, com.intellij.database.extractors.DataColumnImpl@46aca6cc, com.intellij.database.extractors.DataColumnImpl@5127901f, com.intellij.database.extractors.DataColumnImpl@87cb340, com.intellij.database.extractors.DataColumnImpl@66906c9, com.intellij.database.extractors.DataColumnImpl@25d04a0e, com.intellij.database.extractors.DataColumnImpl@489a91c3, com.intellij.database.extractors.DataColumnImpl@2511cd23, com.intellij.database.extractors.DataColumnImpl@6b80d806, com.intellij.database.extractors.DataColumnImpl@4c277f42, com.intellij.database.extractors.DataColumnImpl@50affb8c, com.intellij.database.extractors.DataColumnImpl@7b7c5c6f, com.intellij.database.extractors.DataColumnImpl@16d1ebee], kotlin.script.engine = org.jetbrains.kotlin.jsr223.KotlinJsr223JvmScriptEngine4Idea@61fb5b19, TRANSPOSED = false, OUT = com.intellij.database.extractors.ScriptDataExtractor$2@4ea7af31, ROWS = JBIterable, kotlin.script.state = org.jetbrains.kotlin.cli.common.repl.AggregatedReplStageState@57210dae
// tail log in console
// search for  - STDOUT -
// idea.log
// current bindings
//if (bindings.isNotEmpty()) {
//    println(bindings.entries.joinToString { "${it.key} = ${it.value}" })
//}
//println(bindings::class)

// https://youtrack.jetbrains.com/issue/KTIJ-13085/Kotlin-scripting-console-cant-resolve-bindings-variable
class SimpleBindings(private val bindings: Bindings) {
    val selection = get<Iterable<DasObject>?>("SELECTION")
    val project = get<Project?>("PROJECT")
    val files = get<Files?>("FILES")
    val clipboard = get<Clipboard?>("CLIPBOARD")
    val log = get<ScriptLogger?>("LOG")
    val dialect = get<DatabaseDialect?>("DIALECT")
    val table = get<DbTableImpl?>("TABLE")
    val allColumns = get<List<DataColumn>?>("ALL_COLUMNS")
    val columns = get<List<DataColumn>?>("COLUMNS")
    val formatter = get<ValueFormatter?>("FORMATTER")
    val out = get<Appendable?>("OUT")
    val rows = get<Iterable<DataRow>?>("ROWS")
    val transposed = get<Boolean?>("TRANSPOSED")

    @Suppress("UNCHECKED_CAST")
    operator fun <T> get(key: String): T? = bindings[key] as T?
}

@Suppress("UNRESOLVED_REFERENCE")
val binding = SimpleBindings(bindings)
val SEPARATOR = ","
val QUOTE = "\""
val NEWLINE = System.getProperty("line.separator")

//def printRow = { values, valueToString ->
//  values.eachWithIndex { value, idx ->
//    def str = valueToString(value)
//    def q = str.contains(SEPARATOR) || str.contains(QUOTE) || str.contains(NEWLINE)
//    OUT.append(q ? QUOTE : "")
//      .append(str.replace(QUOTE, QUOTE + QUOTE))
//      .append(q ? QUOTE : "")
//      .append(idx != values.size() - 1 ? SEPARATOR : NEWLINE)
//  }
//}
//
//if (TRANSPOSED) {
//  def values = COLUMNS.collect { new ArrayList<String>() }
//  ROWS.each { row -> COLUMNS.eachWithIndex { col, i -> values[i].add(FORMATTER.format(row, col)) } }
//  values.each { printRow(it, { it }) }
//} else {
//  ROWS.each { row -> printRow(COLUMNS, { FORMATTER.format(row, it) }) }
//}

if (binding.transposed) {

}
