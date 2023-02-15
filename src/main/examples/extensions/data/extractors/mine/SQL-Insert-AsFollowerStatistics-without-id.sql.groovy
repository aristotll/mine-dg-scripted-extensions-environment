import com.intellij.database.extensions.DataColumn
import com.intellij.database.extensions.DataRow
import com.intellij.database.util.DbSqlUtil

def record(List<DataColumn> columns, DataRow dataRow) {
    def SEP = ", "
    def QUOTE = "\'"
    def STRING_PREFIX = DIALECT.getDbms().isMicrosoft() ? "N" : ""
    def NEWLINE = System.getProperty("line.separator")

    //noinspection GrDeprecatedAPIUsage
    def KEYWORDS_LOWERCASE = DbSqlUtil.areKeywordsLowerCase(PROJECT)
    def KW_INSERT_INTO = KEYWORDS_LOWERCASE ? "insert into " : "INSERT INTO "
    def KW_VALUES = KEYWORDS_LOWERCASE ? "values" : "VALUES"
    def KW_NULL = KEYWORDS_LOWERCASE ? "null" : "NULL"

    def begin = true
    def BLACK_LIST = ['id']
    def CONSTANT_VALUES = [cp_role: 2]

    if (begin) {
        OUT.append(KW_INSERT_INTO)
        if (TABLE == null) OUT.append("MY_TABLE")
        else OUT.append(TABLE.getParent().getName()).append(".").append(TABLE.getName())
        OUT.append(" (")

        columns.eachWithIndex { column, idx ->
            if (BLACK_LIST.contains(column.name())) return
            OUT.append(column.name()).append(idx != columns.size() - 1 ? SEP : "")
        }

        OUT.append(")").append(NEWLINE)
        OUT.append(KW_VALUES).append("  (")
        begin = false
    } else {
        OUT.append(",").append(NEWLINE)
        OUT.append("        (")
    }

    columns.eachWithIndex { column, idx ->
        if (BLACK_LIST.contains(column.name())) return
        def value = dataRow.value(column)
        if (CONSTANT_VALUES.containsKey(column.name())) value = CONSTANT_VALUES[column.name()]
        def stringValue = value == null ? KW_NULL : FORMATTER.formatValue(value, column)
        def isStringLiteral = value != null && FORMATTER.isStringLiteral(value, column)
        if (isStringLiteral && DIALECT.getDbms().isMysql()) stringValue = stringValue.replace("\\", "\\\\")
        OUT.append(isStringLiteral ? (STRING_PREFIX + QUOTE) : "")
                .append(stringValue ? stringValue.replace(QUOTE, QUOTE + QUOTE) : stringValue)
                .append(isStringLiteral ? QUOTE : "")
                .append(idx != columns.size() - 1 ? SEP : "")
    }
    OUT.append(");")
}

ROWS.each { DataRow row -> record(COLUMNS, row) }
OUT.append(";")
