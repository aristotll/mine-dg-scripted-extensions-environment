import com.intellij.database.extensions.DataColumn

import static com.intellij.openapi.util.text.StringUtil.escapeStringCharacters


def printJSON(int level, DataColumn col, o) {
    def NEWLINE = System.getProperty("line.separator")
    def INDENT = "  "
    switch (o) {
        case null: OUT.append("null"); break
        case Tuple: printJSON(level, o[0], o[1]); break
        case Map:
            OUT.append("{")
            o.entrySet().eachWithIndex { entry, i ->
                OUT.append("${i > 0 ? "," : ""}$NEWLINE${INDENT * (level + 1)}")
                OUT.append("\"${escapeStringCharacters(entry.getKey().toString())}\"")
                OUT.append(": ")
                printJSON(level + 1, col, entry.getValue())
            }
            OUT.append("$NEWLINE${INDENT * level}}")
            break
        case Object[]:
        case Iterable:
            OUT.append("[")
            def plain = true
            o.eachWithIndex { item, i ->
                plain = item == null || item instanceof Number || item instanceof Boolean || item instanceof String
                if (plain) {
                    OUT.append(i > 0 ? ", " : "")
                } else {
                    OUT.append("${i > 0 ? "," : ""}$NEWLINE${INDENT * (level + 1)}")
                }
                printJSON(level + 1, col, item)
            }
            if (plain) OUT.append("]") else OUT.append("$NEWLINE${INDENT * level}]")
            break
        case Boolean:
            OUT.append("$o");
            break
        default:
            def str = FORMATTER.formatValue(o, col)
            OUT.append(FORMATTER.isStringLiteral(o, col) ? "\"${escapeStringCharacters(str)}\"" : str);
            break
    }
}

printJSON(0, null, ROWS.transform { row ->
    def map = [:]
    COLUMNS.each { DataColumn col ->
        if (row.hasValue(col)) {
            def val = row.value(col)
            map[col.name()] = new Tuple(col, val)
        }
    }
    map
})