
def RES = 0G
ROWS.each { row ->
  COLUMNS.each { column ->
    def value = row.value(column)
    if (value instanceof Number) {
      RES += 1
    }
    else if (value.toString().isBigDecimal()) {
      RES += 1
    }
  }
}
OUT.append(RES.toString())