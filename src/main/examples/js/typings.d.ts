// [TypeScript: Triple-Slash Directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)
/// <reference path='./generated.d.ts' />
/// <reference types='@craftjs-typings/java.base/java_util' />
/// <reference types='@craftjs-typings/java.base/java_lang' />
import {com} from "./generated";
import DbTableImpl = com.intellij.database.psi.DbTableImpl;
import Project = com.intellij.openapi.project.Project;
import ScriptLogger = com.intellij.database.extensions.ScriptLogger;
import Clipboard = com.intellij.database.extensions.Clipboard
import Files = com.intellij.database.extensions.Files;
import ValueFormatter = com.intellij.database.extensions.ValueFormatter;
import DataStream = com.intellij.database.extensions.DataStream;
import DataRow = com.intellij.database.extensions.DataRow;
import JBIterable = com.intellij.util.containers.JBIterable;
import {Locale, Formatter, ArrayList, Map, List, Collection, Iterable, Iterator} from "java.util";
import {Appendable, CharSequence} from "java.lang";
import {Consumer} from "java.util.function";
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
declare module "java.lang" {
    interface Appendable {
        append(csq: CharSequence, start: number, end: number): Appendable;

        append(csq: CharSequence): Appendable;

        append(c: string): Appendable;
    }

    interface Iterable<T> {
        iterator(): Iterator<T>;

        // https://stackoverflow.com/a/66411491/4680436
        forEach<U extends T>(action: Consumer<U>): void;
    }
}
declare module "java.util" {
    interface List<E> extends AbstractCollection<E> {
    }
}

declare namespace com.intellij.database.extensions {
    export interface DataColumn {
        columnNumber(): number;

        name(): string;
    }
}

declare namespace com.intellij.database.extensions {

    export interface ValueFormatter {
        format(dataRow: DataRow, dataColumn: DataColumn): string;

        formatValue(value: any, dataColumn: DataColumn): string;

        getTypeName(value: any, dataColumn: DataColumn): string;

        isStringLiteral(value: any, dataColumn: DataColumn): boolean;
    }

}


declare global {
    var SELECTION: com.intellij.util.containers.JBIterable<com.intellij.database.model.DasObject>;
    var CLIPBOARD: Clipboard;
    var LOG: ScriptLogger;
    var FILES: Files;
    var PROJECT: Project;
    var DIALECT: com.intellij.database.dialects.DatabaseDialect;
    var TABLE: DbTableImpl;
    var ALL_COLUMNS: List<com.intellij.database.extensions.DataColumn>;
    var COLUMNS: List<com.intellij.database.extensions.DataColumn>;
    var FORMATTER: ValueFormatter;
    var OUT: Appendable;
    var ROWS: JBIterable<DataRow>;
    var TRANSPOSED: boolean;
}
