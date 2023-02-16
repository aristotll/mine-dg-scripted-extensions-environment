/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.1.1185 on 2023-02-16 02:57:18.

export namespace com.intellij.openapi.project {

    export interface Project extends com.intellij.openapi.components.ComponentManager, com.intellij.openapi.extensions.AreaInstance {
        presentableUrl: string;
        workspaceFile: com.intellij.openapi.vfs.VirtualFile;
        projectFile: com.intellij.openapi.vfs.VirtualFile;
        basePath: string;
        projectFilePath: string;
        locationHash: string;
        /**
         * @deprecated
         */
        baseDir: com.intellij.openapi.vfs.VirtualFile;
        initialized: boolean;
        name: string;
        open: boolean;
        default: boolean;
    }

}

export namespace com.intellij.database.psi {

    export interface DbTableImpl extends com.intellij.database.psi.DbElementImpl<com.intellij.database.model.DasTable, com.intellij.database.psi.DbElement>, com.intellij.database.psi.DbTable {
    }

}

export namespace com.intellij.database.extensions {

    export interface DataColumn {
    }

}

export namespace com.intellij.database.extensions {

    export interface Clipboard {
    }

}

export namespace com.intellij.database.extensions {

    export interface ScriptLogger {
    }

}

export namespace com.intellij.database.extensions {

    export interface Files {
    }

}

export namespace com.intellij.database.extensions {

    export interface DataRow {
    }

}

export namespace com.intellij.database.extensions {

    export interface ValueFormatter {
    }

}

export namespace com.intellij.database.extensions {

    export interface DataStream<T> extends com.intellij.util.containers.JBIterable<T> {
    }

}

export namespace com.intellij.openapi.vfs {

    export interface VirtualFile extends com.intellij.openapi.util.UserDataHolderBase, com.intellij.openapi.util.ModificationTracker {
    }

}

export namespace com.intellij.util.messages {

    export interface MessageBus extends com.intellij.openapi.Disposable {
        disposed: boolean;
        parent: com.intellij.util.messages.MessageBus;
    }

}

export namespace com.intellij.openapi.util {

    export interface Condition<T> {
    }

}

export namespace org.picocontainer {

    export interface PicoContainer {
    }

}

export namespace com.intellij.openapi.extensions {

    export interface ExtensionsArea {
    }

}

export namespace com.intellij.openapi.components {

    export interface ComponentManager extends com.intellij.openapi.util.UserDataHolder, com.intellij.openapi.Disposable, com.intellij.openapi.extensions.AreaInstance {
        messageBus: com.intellij.util.messages.MessageBus;
        disposed: com.intellij.openapi.util.Condition<any>;
        picoContainer: org.picocontainer.PicoContainer;
        injectionForExtensionSupported: boolean;
    }

}

export namespace com.intellij.openapi.extensions {

    export interface AreaInstance {
        extensionArea: com.intellij.openapi.extensions.ExtensionsArea;
    }

}

export namespace com.intellij.model.psi {

    export interface PsiSymbolDeclaration {
        declaringElement: com.intellij.psi.PsiElement;
        rangeInDeclaringElement: com.intellij.openapi.util.TextRange;
        absoluteRange: com.intellij.openapi.util.TextRange;
        symbol: com.intellij.model.Symbol;
    }

}

export namespace com.intellij.model.psi {

    export interface PsiSymbolReference {
        absoluteRange: com.intellij.openapi.util.TextRange;
        rangeInElement: com.intellij.openapi.util.TextRange;
        element: com.intellij.psi.PsiElement;
    }

}

export namespace com.intellij.util.keyFMap {

    export interface KeyFMap {
        valueIdentityHashCode: number;
        empty: boolean;
        keys: com.intellij.openapi.util.Key<any>[];
    }

}

export namespace com.intellij.database.psi {

    export interface DbTable extends com.intellij.database.psi.DbElement, com.intellij.database.model.PsiTable, com.intellij.database.symbols.DasTableSymbol {
        dasParent: com.intellij.database.psi.DbElement;
        parent: com.intellij.database.psi.DbElement;
    }

}

export namespace com.intellij.openapi.util {

    export interface UserDataHolderBase extends java.util.concurrent.atomic.AtomicReference<com.intellij.util.keyFMap.KeyFMap>, com.intellij.openapi.util.UserDataHolderEx {
        userMap: com.intellij.util.keyFMap.KeyFMap;
        opaque: com.intellij.util.keyFMap.KeyFMap;
        release: com.intellij.util.keyFMap.KeyFMap;
        plain: com.intellij.util.keyFMap.KeyFMap;
    }

}

export namespace com.intellij.openapi.util {

    export interface ModificationTracker {
        modificationCount: number;
    }

}

export namespace com.intellij.openapi {

    export interface Disposable {
    }

}

export namespace com.intellij.openapi.util {

    export interface UserDataHolder {
    }

}

export namespace com.intellij.psi {

    export interface PsiElement extends com.intellij.openapi.util.UserDataHolder, com.intellij.openapi.util.Iconable {
        startOffsetInParent: number;
        ownDeclarations: com.intellij.model.psi.PsiSymbolDeclaration[];
        navigationElement: com.intellij.psi.PsiElement;
        originalElement: com.intellij.psi.PsiElement;
        textRangeInParent: com.intellij.openapi.util.TextRange;
        textRange: com.intellij.openapi.util.TextRange;
        resolveScope: com.intellij.psi.search.GlobalSearchScope;
        useScope: com.intellij.psi.search.SearchScope;
        ownReferences: com.intellij.model.psi.PsiSymbolReference[];
        textOffset: number;
        text: string;
        project: com.intellij.openapi.project.Project;
        manager: com.intellij.psi.PsiManager;
        physical: boolean;
        containingFile: com.intellij.psi.PsiFile;
        references: com.intellij.psi.PsiReference[];
        reference: com.intellij.psi.PsiReference;
        parent: com.intellij.psi.PsiElement;
        context: com.intellij.psi.PsiElement;
        node: com.intellij.lang.ASTNode;
        language: com.intellij.lang.Language;
        children: com.intellij.psi.PsiElement[];
        textLength: number;
        valid: boolean;
        prevSibling: com.intellij.psi.PsiElement;
        firstChild: com.intellij.psi.PsiElement;
        lastChild: com.intellij.psi.PsiElement;
        nextSibling: com.intellij.psi.PsiElement;
        writable: boolean;
    }

}

export namespace com.intellij.openapi.util {

    export interface TextRange extends com.intellij.openapi.util.Segment, java.io.Serializable {
        length: number;
        empty: boolean;
    }

}

export namespace com.intellij.model {

    export interface Symbol {
    }

}

export namespace com.intellij.openapi.util {

    export interface Key<T> {
    }

}

export namespace com.intellij.database.psi {

    export interface DbElementImpl<D, P> extends com.intellij.psi.impl.FakePsiElement, com.intellij.database.psi.DbElement, com.intellij.psi.meta.PsiMetaOwner, com.intellij.psi.meta.PsiPresentableMetaData {
    }

}

export namespace com.intellij.database.model {

    export interface DasTable extends com.intellij.database.model.DasSchemaChild {
        system: boolean;
        temporary: boolean;
    }

}

export namespace com.intellij.database.psi {

    export interface DbElement extends com.intellij.database.model.PsiObject, com.intellij.psi.PsiFileSystemItem, com.intellij.psi.meta.PsiPresentableMetaData, com.intellij.ide.util.treeView.WeighedItem, com.intellij.database.symbols.DasPsiSymbol, com.intellij.database.symbols.DasSymbolObject {
        documentationBase: java.lang.CharSequence;
        dasParent: com.intellij.database.psi.DbElement;
        dataSource: com.intellij.database.psi.DbDataSource;
        delegate: any;
        parent: com.intellij.database.psi.DbElement;
    }

}

export namespace java.lang {

    export interface CharSequence {
    }

}

export namespace com.intellij.database.psi {

    export interface DbDataSource extends com.intellij.database.psi.DbElement, com.intellij.database.model.DasDataSource {
        queryLanguage: com.intellij.lang.Language;
        databaseDialect: com.intellij.database.dialects.DatabaseDialect;
        nameIndex: com.intellij.database.psi.ModelNameIndex;
        delegate: com.intellij.database.model.DatabaseSystem;
    }

}

export namespace com.intellij.database.model {

    export interface DasObject extends com.intellij.database.model.DasNamed {
        /**
         * @deprecated for removal
         */
        dbParent: com.intellij.database.model.DasObject;
        dasParent: com.intellij.database.model.DasObject;
        comment: string;
    }

}

export namespace com.intellij.database.model {

    export interface ObjectKind extends java.lang.Comparable<com.intellij.database.model.ObjectKind> {
        mySingularPresentableKey: string;
        myPluralPresentableKey: string;
        presentableName: string;
        pluralPresentableName: string;
        order: number;
        bundle: com.intellij.DynamicBundle;
    }

}

export namespace com.intellij.psi.search {

    export interface GlobalSearchScope extends com.intellij.psi.search.SearchScope, com.intellij.psi.search.ProjectAwareFileFilter {
        searchInLibraries: boolean;
        forceSearchingInLibrarySources: boolean;
        unloadedModulesBelongingToScope: com.intellij.openapi.module.UnloadedModuleDescription[];
        modelBranchesAffectingScope: com.intellij.model.ModelBranch[];
    }

}

export namespace com.intellij.psi.search {

    export interface SearchScope {
        displayName: string;
        icon: javax.swing.Icon;
    }

}

export namespace com.intellij.psi {

    export interface PsiManager extends com.intellij.openapi.util.UserDataHolderBase {
    }

}

export namespace com.intellij.psi {

    export interface PsiFile extends com.intellij.psi.PsiFileSystemItem {
        modificationStamp: number;
        viewProvider: com.intellij.psi.FileViewProvider;
        originalFile: com.intellij.psi.PsiFile;
        fileType: com.intellij.openapi.fileTypes.FileType;
        fileElementType: com.intellij.psi.tree.IFileElementType;
        /**
         * @deprecated
         */
        psiRoots: com.intellij.psi.PsiFile[];
        containingDirectory: com.intellij.psi.PsiDirectory;
        parent: com.intellij.psi.PsiDirectory;
        node: com.intellij.lang.FileASTNode;
    }

}

export namespace com.intellij.psi {

    export interface PsiReference {
        absoluteRange: com.intellij.openapi.util.TextRange;
        rangeInElement: com.intellij.openapi.util.TextRange;
        canonicalText: string;
        soft: boolean;
        variants: any[];
        element: com.intellij.psi.PsiElement;
    }

}

export namespace com.intellij.lang {

    export interface ASTNode extends com.intellij.openapi.util.UserDataHolder {
        startOffsetInParent: number;
        textRange: com.intellij.openapi.util.TextRange;
        treeParent: com.intellij.lang.ASTNode;
        startOffset: number;
        treeNext: com.intellij.lang.ASTNode;
        lastChildNode: com.intellij.lang.ASTNode;
        firstChildNode: com.intellij.lang.ASTNode;
        treePrev: com.intellij.lang.ASTNode;
        text: string;
        psi: com.intellij.psi.PsiElement;
        chars: java.lang.CharSequence;
        textLength: number;
        elementType: com.intellij.psi.tree.IElementType;
    }

}

export namespace com.intellij.lang {

    export interface Language extends com.intellij.openapi.util.UserDataHolderBase {
    }

}

export namespace com.intellij.navigation {

    export interface ItemPresentation {
        presentableText: string;
        locationString: string;
    }

}

export namespace javax.swing {

    export interface Icon {
        iconWidth: number;
        iconHeight: number;
    }

}

export namespace com.intellij.util.containers {

    export interface JBIterable<E> extends java.lang.Iterable<E> {
        notEmpty: boolean;
        empty: boolean;
    }

}

export namespace com.intellij.database {

    export interface Dbms extends java.lang.Comparable<com.intellij.database.Dbms> {
        hive: boolean;
        hsqldb: boolean;
        sqlite: boolean;
        mongo: boolean;
        hset: com.intellij.database.HSet;
        vertica: boolean;
        bigQuery: boolean;
        mysql: boolean;
        db2: boolean;
        spark: boolean;
        redshift: boolean;
        derby: boolean;
        exasol: boolean;
        postgres: boolean;
        sybase: boolean;
        oracle: boolean;
        h2: boolean;
        documentOriented: boolean;
        cockroach: boolean;
        transactSql: boolean;
        couchbase: boolean;
        cassandra: boolean;
        snowflake: boolean;
        clickHouse: boolean;
        greenplum: boolean;
        microsoft: boolean;
        name: string;
        displayName: string;
        icon: javax.swing.Icon;
    }

}

export namespace com.intellij.database.model {

    export interface PsiTable extends com.intellij.database.model.PsiObject, com.intellij.database.model.DasTable {
    }

}

export namespace com.intellij.database.symbols {

    export interface DasTableSymbol extends com.intellij.database.symbols.DasSymbol {
        dasObject: com.intellij.database.model.DasTable;
    }

}

export namespace com.intellij.openapi.util {

    export interface UserDataHolderEx extends com.intellij.openapi.util.UserDataHolder {
    }

}

export namespace com.intellij.openapi.util {

    export interface Iconable {
    }

}

export namespace com.intellij.openapi.util {

    export interface Segment {
        startOffset: number;
        endOffset: number;
    }

}

export namespace java.io {

    export interface Serializable {
    }

}

export namespace com.intellij.psi.impl {

    export interface FakePsiElement extends com.intellij.psi.impl.PsiElementBase, com.intellij.psi.PsiNamedElement, com.intellij.navigation.ItemPresentation {
    }

}

export namespace com.intellij.psi.meta {

    export interface PsiMetaOwner {
        metaData: com.intellij.psi.meta.PsiMetaData;
    }

}

export namespace com.intellij.psi.meta {

    export interface PsiPresentableMetaData extends com.intellij.psi.meta.PsiMetaData {
        typeName: string;
        icon: javax.swing.Icon;
    }

}

export namespace com.intellij.database.model {

    export interface DasSchemaChild extends com.intellij.database.model.DasObject {
    }

}

export namespace com.intellij.database.model {

    export interface PsiObject extends com.intellij.database.model.DasObject, com.intellij.psi.PsiElement, com.intellij.database.model.DasScopeAware {
    }

}

export namespace com.intellij.psi {

    export interface PsiFileSystemItem extends com.intellij.psi.PsiCheckedRenameElement, com.intellij.psi.NavigatablePsiElement {
        virtualFile: com.intellij.openapi.vfs.VirtualFile;
        parent: com.intellij.psi.PsiFileSystemItem;
        directory: boolean;
    }

}

export namespace com.intellij.ide.util.treeView {

    export interface WeighedItem {
        weight: number;
    }

}

export namespace com.intellij.database.symbols {

    export interface DasPsiSymbol extends com.intellij.psi.PsiNamedElement, com.intellij.database.symbols.DasSymbol {
    }

}

export namespace com.intellij.database.symbols {

    export interface DasSymbolObject extends com.intellij.database.symbols.DasSymbol, com.intellij.database.model.DasObject {
    }

}

export namespace com.intellij.database.dialects {

    export interface DatabaseDialect {
        dbms: com.intellij.database.Dbms;
        displayName: string;
    }

}

export namespace com.intellij.database.psi {

    export interface ModelNameIndex {
        allNames: string[];
    }

}

export namespace com.intellij.database.model {

    export interface DasModel extends com.intellij.database.model.CasingProvider {
        modelRoots: com.intellij.util.containers.JBIterable<com.intellij.database.model.DasObject>;
        currentRootNamespace: com.intellij.database.model.DasNamespace;
        metaModel: com.intellij.database.model.MetaModel;
    }

}

export namespace com.intellij.database.model {

    /**
     * @deprecated for removal
     */
    export interface DatabaseSystem extends com.intellij.database.model.DasDataSource {
    }

}

export namespace com.intellij.database.model {

    export interface NameVersion {
        name: string;
        version: string;
    }

}

export namespace com.intellij.database.model {

    export interface RawConnectionConfig {
        url: string;
        driverClass: string;
        name: string;
    }

}

export namespace com.intellij.database.util {

    export interface Version extends java.lang.Comparable<com.intellij.database.util.Version>, java.io.Serializable {
    }

}

export namespace com.intellij.database.model {

    export interface DasDataSource extends com.intellij.openapi.util.Iconable {
        databaseVersion: com.intellij.database.model.NameVersion;
        model: com.intellij.database.model.DasModel;
        dbms: com.intellij.database.Dbms;
        uniqueId: string;
        connectionConfig: com.intellij.database.model.RawConnectionConfig;
        name: string;
        comment: string;
        version: com.intellij.database.util.Version;
    }

}

export namespace com.intellij.database.model {

    export interface DasNamed {
        kind: com.intellij.database.model.ObjectKind;
        quoted: boolean;
        name: string;
    }

}

export namespace com.intellij {

    export interface DynamicBundle extends com.intellij.AbstractBundle {
    }

}

export namespace com.intellij.openapi.module {

    export interface UnloadedModuleDescription extends com.intellij.openapi.module.ModuleDescription {
        contentRoots: com.intellij.openapi.vfs.pointers.VirtualFilePointer[];
        groupPath: string[];
    }

}

export namespace com.intellij.model {

    export interface ModelBranch extends com.intellij.openapi.util.UserDataHolder {
        project: com.intellij.openapi.project.Project;
        branchedVfsStructureModificationCount: number;
        branchedPsiModificationCount: number;
    }

}

export namespace com.intellij.psi.search {

    export interface ProjectAwareFileFilter extends com.intellij.openapi.vfs.VirtualFileFilter {
        project: com.intellij.openapi.project.Project;
    }

}

export namespace com.intellij.psi {

    export interface FileViewProvider extends java.lang.Cloneable, com.intellij.openapi.util.UserDataHolderEx {
        virtualFile: com.intellij.openapi.vfs.VirtualFile;
        allFiles: com.intellij.psi.PsiFile[];
        modificationStamp: number;
        baseLanguage: com.intellij.lang.Language;
        fileType: com.intellij.openapi.fileTypes.FileType;
        manager: com.intellij.psi.PsiManager;
        physical: boolean;
        languages: com.intellij.lang.Language[];
        stubBindingRoot: com.intellij.psi.PsiFile;
        eventSystemEnabled: boolean;
        contents: java.lang.CharSequence;
        document: com.intellij.openapi.editor.Document;
    }

}

export namespace com.intellij.openapi.fileTypes {

    export interface FileType extends com.intellij.openapi.options.Scheme {
        binary: boolean;
        description: string;
        defaultExtension: string;
        readOnly: boolean;
        icon: javax.swing.Icon;
    }

}

export namespace com.intellij.psi.tree {

    export interface IFileElementType extends com.intellij.psi.tree.ILazyParseableElementType {
    }

}

export namespace com.intellij.psi {

    export interface PsiDirectory extends com.intellij.psi.PsiFileSystemItem {
        files: com.intellij.psi.PsiFile[];
        subdirectories: com.intellij.psi.PsiDirectory[];
        parentDirectory: com.intellij.psi.PsiDirectory;
        parent: com.intellij.psi.PsiDirectory;
    }

}

export namespace com.intellij.lang {

    export interface FileASTNode extends com.intellij.lang.ASTNode {
        parsed: boolean;
        lighterAST: com.intellij.lang.LighterAST;
        charTable: com.intellij.util.CharTable;
    }

}

export namespace com.intellij.psi.tree {

    export interface IElementType {
        leftBound: boolean;
        debugName: string;
        index: number;
        language: com.intellij.lang.Language;
    }

}

export namespace com.intellij.database {

    export interface HSet {
        name: string;
    }

}

export namespace com.intellij.database.symbols {

    export interface DasSymbol extends com.intellij.database.model.DasNamed, com.intellij.openapi.util.UserDataHolder {
        navigationElement: com.intellij.psi.PsiElement;
        dasObject: com.intellij.database.model.DasObject;
        contextElement: com.intellij.psi.PsiElement;
        psiDeclarations: com.intellij.util.containers.JBIterable<com.intellij.psi.PsiElement>;
        dbms: com.intellij.database.Dbms;
        valid: boolean;
    }

}

export namespace java.util.concurrent.atomic {

    export interface AtomicReference<V> extends java.io.Serializable {
        opaque: V;
        release: V;
        plain: V;
    }

}

export namespace com.intellij.psi.impl {

    export interface PsiElementBase extends com.intellij.psi.impl.ElementBase, com.intellij.psi.NavigatablePsiElement, java.lang.Cloneable {
    }

}

export namespace com.intellij.psi {

    export interface PsiNamedElement extends com.intellij.psi.PsiElement {
        name: string;
    }

}

export namespace com.intellij.psi.meta {

    export interface PsiMetaData {
        declaration: com.intellij.psi.PsiElement;
        /**
         * @deprecated
         */
        dependences: any[];
        dependencies: any[];
        name: string;
    }

}

export namespace com.intellij.database.model {

    export interface DasScopeAware {
    }

}

export namespace com.intellij.psi {

    export interface PsiCheckedRenameElement extends com.intellij.psi.PsiNamedElement {
    }

}

export namespace com.intellij.psi {

    export interface NavigatablePsiElement extends com.intellij.psi.PsiElement, com.intellij.navigation.NavigationItem {
    }

}

export namespace com.intellij.database.model {

    export interface DasNamespace extends com.intellij.database.model.DasObject {
    }

}

export namespace com.intellij.database.model {

    export interface MetaModel {
        namespaces: com.intellij.database.model.ObjectKind[];
        kinds: java.lang.Iterable<com.intellij.database.model.ObjectKind>;
        dbms: com.intellij.database.Dbms;
        rootNamespaceKinds: com.intellij.util.containers.JBIterable<com.intellij.database.model.ObjectKind>;
    }

}

export namespace com.intellij.database.model {

    export interface CasingProvider {
    }

}

export namespace java.util {

    export interface ResourceBundle {
        locale: java.util.Locale;
        baseBundleName: string;
        keys: java.util.Enumeration<string>;
    }

}

export namespace com.intellij {

    export interface AbstractBundle {
        resourceBundle: java.util.ResourceBundle;
    }

}

export namespace java.lang {

    export interface Comparable<T> {
    }

}

export namespace com.intellij.openapi.vfs.pointers {

    export interface VirtualFilePointer {
        presentableUrl: string;
        url: string;
        file: com.intellij.openapi.vfs.VirtualFile;
        fileName: string;
        valid: boolean;
    }

}

export namespace com.intellij.openapi.module {

    export interface ModuleDescription {
        dependencyModuleNames: string[];
        name: string;
    }

}

export namespace com.intellij.openapi.vfs {

    export interface VirtualFileFilter {
    }

}

export namespace com.intellij.openapi.editor {

    export interface Document extends com.intellij.openapi.util.UserDataHolder {
        modificationStamp: number;
        lineCount: number;
        charsSequence: java.lang.CharSequence;
        immutableCharSequence: java.lang.CharSequence;
        inBulkUpdate: boolean;
        text: string;
        /**
         * @deprecated
         */
        chars: string[];
        textLength: number;
        writable: boolean;
    }

}

export namespace java.lang {

    export interface Cloneable {
    }

}

export namespace com.intellij.openapi.options {

    export interface Scheme {
        name: string;
        displayName: string;
    }

}

export namespace com.intellij.psi.tree {

    export interface ILazyParseableElementType extends com.intellij.psi.tree.IElementType, com.intellij.psi.tree.ILazyParseableElementTypeBase {
    }

}

export namespace com.intellij.lang {

    export interface LighterAST {
        charTable: com.intellij.util.CharTable;
        root: com.intellij.lang.LighterASTNode;
    }

}

export namespace com.intellij.util {

    export interface CharTable {
    }

}

export namespace java.lang {

    export interface Iterable<T> {
    }

}

export namespace com.intellij.psi.impl {

    export interface ElementBase extends com.intellij.openapi.util.UserDataHolderBase, com.intellij.openapi.util.Iconable {
    }

}

export namespace com.intellij.navigation {

    export interface NavigationItem extends com.intellij.pom.Navigatable {
        presentation: com.intellij.navigation.ItemPresentation;
        name: string;
    }

}

export namespace java.util {

    export interface Locale extends java.lang.Cloneable, java.io.Serializable {
    }

}

export namespace java.util {

    export interface Enumeration<E> {
    }

}

export namespace com.intellij.psi.tree {

    export interface ILazyParseableElementTypeBase {
    }

}

export namespace com.intellij.lang {

    export interface LighterASTNode {
        startOffset: number;
        endOffset: number;
        tokenType: com.intellij.psi.tree.IElementType;
        textLength: number;
    }

}

export namespace com.intellij.pom {

    export interface Navigatable {
    }

}
