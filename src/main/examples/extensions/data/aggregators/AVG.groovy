
def RES = 0G
i = 0
ROWS.each { row ->
  COLUMNS.each { column ->
    def value = row.value(column)
    if (value instanceof Number) {
      RES += value
      i++
    }
    else if (value.toString().isBigDecimal()) {
      RES += value.toString().toBigDecimal()
      i++
    }
  }
}
if (i > 0) {
  RES = RES / i
  OUT.append(RES.toString())
}
else {
  OUT.append("Not enough values")
}