
values = new ArrayList<BigDecimal>()
ROWS.each { row ->
  COLUMNS.each { column ->
    def value = row.value(column)
    if (value instanceof Number) {
      values.add(value as BigDecimal)
    }
    else if (value.toString().isBigDecimal()) {
      values.add(value.toString() as BigDecimal)
    }
  }
}
if (values.size() == 0) {
  OUT.append("Not enough values")
  return
}
OUT.append(Collections.min(values).toString())