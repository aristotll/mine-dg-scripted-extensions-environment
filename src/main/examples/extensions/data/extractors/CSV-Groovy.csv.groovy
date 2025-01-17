
SEPARATOR = ","
QUOTE     = "\""
NEWLINE   = System.getProperty("line.separator")

def printRow = { values, valueToString ->
  values.eachWithIndex { value, idx ->
    def str = valueToString(value)
    def q = str.contains(SEPARATOR) || str.contains(QUOTE) || str.contains(NEWLINE)
    OUT.append(q ? QUOTE : "")
      .append(str.replace(QUOTE, QUOTE + QUOTE))
      .append(q ? QUOTE : "")
      .append(idx != values.size() - 1 ? SEPARATOR : NEWLINE)
  }
}

if (!TRANSPOSED) {
  ROWS.each { row -> printRow(COLUMNS, { FORMATTER.format(row, it) }) }
}
else {
  def values = COLUMNS.collect { new ArrayList<String>() }
  ROWS.each { row -> COLUMNS.eachWithIndex { col, i -> values[i].add(FORMATTER.format(row, col)) } }
  values.each { printRow(it, { it }) }
}