
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
elementsNumber = values.size()
Collections.sort(values)
mid = (int)elementsNumber / 2
RES = elementsNumber % 2 != 0 ? values[mid] : (values[mid] + values[mid - 1]) / 2
OUT.append(RES.toString())