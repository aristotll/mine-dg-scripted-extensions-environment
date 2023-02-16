require 'json'
# java_import com.intellij.database.extensions.DataRow
# the logic is very simple even the groovy implementation is very complicated

# create a list of map to represent the selection
# convert it to json string

#  force evaluation
# rows = ROWS.toList
# OUT.append("wrong")
# OUT.append(ROWS.to_s)
result = ROWS.transform do
  # @type [DataRow] row
|row|
  COLUMNS.map do
  |column|
    #         if (row.hasValue(col)) {
    #             def val = row.value(col)
    #             map[col.name()] = new Tuple(col, val)
    #         }
    row.has_value(column) ? [column.name, row.value(column)] : nil
  end.compact.to_h
end

OUT.append(
  # result.to_list.to_s
  JSON.generate(result.to_list)
)