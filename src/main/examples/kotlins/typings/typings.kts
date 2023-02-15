import com.intellij.database.dialects.DatabaseDialect
import com.intellij.database.extensions.Clipboard
import com.intellij.database.extensions.*
import com.intellij.database.model.DasObject
import com.intellij.database.psi.DbTableImpl
import com.intellij.openapi.project.Project
import javax.script.Bindings

// https://youtrack.jetbrains.com/issue/KTIJ-13085/Kotlin-scripting-console-cant-resolve-bindings-variable
class SimpleBindings(private val bindings: Bindings) {
    val selection = get<Iterable<DasObject>>("SELECTION")
    val project = get<Project>("PROJECT")
    val files = get<Files>("FILES")
    val clipboard = get<Clipboard>("CLIPBOARD")
    val log = get<ScriptLogger>("LOG")
    val dialect = get<DatabaseDialect>("DIALECT")
    val table = get<DbTableImpl>("TABLE")
    val allColumns = get<List<DataColumn>>("ALL_COLUMNS")
    val columns = get<List<DataColumn>>("COLUMNS")
    val formatter = get<ValueFormatter>("FORMATTER")
    val out = get<Appendable>("OUT")
    val rows = get<Iterable<DataRow>>("ROWS")
    val transposed = get<Boolean>("TRANSPOSED")

    @Suppress("UNCHECKED_CAST")
    operator fun <T> get(key: String): T = bindings[key] as T
}

@Suppress("UNRESOLVED_REFERENCE")
val binding = SimpleBindings(bindings)
