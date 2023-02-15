def variables = [
//        TABLE
       //  DIALECT
]
//OUT.append(DIALECT.getClass())
//OUT.append(begin.getClass())
//OUT.append("\n")
OUT.append(variables.collect { it.getClass() }.join("\n"))

//com.intellij.database.psi.DbTableImpl t
//t.getParent()