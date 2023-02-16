java_import "com.intellij.openapi.util.text.StringUtil"
import com.intellij.database.model.DasObject
NEWLINE = java.lang.System.getProperty("line.separator")

# the logic is very simple even the groovy implementation is very complicated

# create a list of map to represent the selection
# convert it to json string

result = ROWS.to_a.collect do
  # @type [DasObject] row
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
  (result.size() == 1 ? result[0] : result).to_json
)