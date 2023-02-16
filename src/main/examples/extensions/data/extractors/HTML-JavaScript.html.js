// https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#template
/**
 * @template T
 * @param {java.util.Iterable<T>} iterable
 * @param {(value: T, index: number) => void} f
 */
function eachWithIdx(iterable, f) {
    const i = iterable.iterator();
    let idx = 0;
    while (i.hasNext()) {
        f(i.next(), idx++);
    }
}

/**
 * @template T,V
 * @param {java.util.Iterable<T>} iterable
 * @param {(value: T, index: number) => V} f
 * @returns {V[]}
 */
function mapEach(iterable, f) {
    const vs = [];
    eachWithIdx(iterable, (value, index) => {
        vs.push(f(value, index));
    });
    return vs;
}

/**
 * @param {string} str
 * @returns {string}
 */
function escape(str) {
    str = str.replaceAll("\t|\b|\\f", "");
    str = com.intellij.openapi.util.text.StringUtil.escapeXml(str);
    str = str.replaceAll("\\r|\\n|\\r\\n", "<br/>");
    return str;
}

const isHTML = RegExp.prototype.test.bind(/^<.+>$/);

const NEWLINE = "\n";

function output(...args) {
    let lines = args.join("\n") + NEWLINE
    // let file = org.codehaus.groovy.runtime.DefaultGroovyMethods
    //     .asType( "/Users/sh00636ml/polyglot/polyglot.log", java.io.File)
    //     .append(args.join(" ") + NEWLINE);
    // com.intellij.openapi.util.io.FileUtil.appendToFile(file, lines)
    // com.intellij.idea.LoggerFactory.getLoggerInstance("polyglot").info(lines)

    //   Path path = Paths.get(fileName);
    //     byte[] strToBytes = str.getBytes();
    //     Files.write(path, strToBytes);
    // let path = java.nio.file.Paths.get("/Users/sh00636ml/polyglot/polyglot.log")
    // java.nio.file.Files.write(path, lines.getBytes(),  java.nio.file.StandardOpenOption.APPEND)
    // https://docs.oracle.com/en/graalvm/enterprise/20/docs/reference-manual/js/NashornMigrationGuide/
    // -Dpolyglot.log.file=/Users/sh00636ml/polyglot/polyglot.log
    // console.log(args);
    // LOG.print("current "+args);
    // System.out.println(args);
    // 这个不行
    for (const arg of args) {
        OUT.append(arg);
    }
}

function outputRow(items, tag) {
    output("<tr>");
    for (let i = 0; i < items.length; i++)
        output("<", tag, ">", isHTML(items[i]) ? items[i] : escape(items[i]), "</", tag, ">");
    output("</tr>", NEWLINE);
}


output("<!DOCTYPE html>", NEWLINE,
    "<html>", NEWLINE,
    "<head>", NEWLINE,
    "<title></title>", NEWLINE,
    "<meta charset=\"UTF-8\">", NEWLINE,
    "</head>", NEWLINE,
    "<body>", NEWLINE,
    "<table border=\"1\" style=\"border-collapse:collapse\">", NEWLINE);

if (TRANSPOSED) {
    const values = mapEach(COLUMNS, col => [col.name()]);
    eachWithIdx(ROWS, row => {
        eachWithIdx(COLUMNS, function (col, i) {
            values[i].push(FORMATTER.format(row, col));
        });
    });
    eachWithIdx(COLUMNS, (_, i) => {
        outputRow(values[i], "td");
    });
} else {
    outputRow(mapEach(COLUMNS, col => col.name()), "th");
    eachWithIdx(ROWS, function (row) {
        outputRow(mapEach(COLUMNS, col => FORMATTER.format(row, col)), "td")
    });
}

output("</table>", NEWLINE, "</body>", NEWLINE, "</html>", NEWLINE);