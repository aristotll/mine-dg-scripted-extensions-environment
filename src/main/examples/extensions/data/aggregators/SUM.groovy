
def RES = 0G
ROWS.each { row ->
  COLUMNS.each { column ->
    def value = row.value(column)
    if (value instanceof Number) {
      RES += value
    }
    else if (value.toString().isBigDecimal()) {
      RES += value.toString().toBigDecimal()
    }
  }
}
OUT.append(RES.toString())