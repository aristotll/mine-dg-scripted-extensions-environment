# frozen_string_literal: true
java_import java.lang.Appendable
java_import java.util.List
java_import com.intellij.util.containers.JBIterable
java_import com.intellij.database.model.DasObject
import com.intellij.database.dialects.DatabaseDialect
import com.intellij.database.extensions.Clipboard
import com.intellij.database.model.DasObject
import com.intellij.database.psi.DbTableImpl
java_import com.intellij.openapi.project.Project
import javax.script.Bindings
import com.intellij.database.extensions.ValueFormatter
import com.intellij.database.extensions.Files
import com.intellij.database.extensions.ScriptLogger
import com.intellij.database.extensions.DataColumn

# a hacker way to make the code completion work in RubyMine
class RSimpleBindings
  def initialize(bindings)
    @bindings = bindings
  end

  # @return [Iterable<DasObject>]  attention iterable is also a ruby enumerable
  def selection
    @bindings["SELECTION"]
  end

  # @return [Project]
  def project
    @bindings["PROJECT"]
  end

  # @return [Files]
  def files
    @bindings["FILES"]
  end

  # @return [Clipboard]
  def clipboard
    @bindings["CLIPBOARD"]
  end

  #@return [ScriptLogger]
  def log
    @bindings["LOG"]
  end

  # @return [DatabaseDialect]
  def dialect
    @bindings["DIALECT"]
  end

  # @return [DbTableImpl]
  def table
    @bindings["TABLE"]
  end

  #@return [List<DataColumn>]
  def all_columns
    @bindings["ALL_COLUMNS"]
  end

  #@return [List<DataColumn>]
  def columns
    @bindings["COLUMNS"]
  end

  # @return [ValueFormatter]
  def formatter
    @bindings["FORMATTER"]
  end

  # @return [Appendable]
  def out
    @bindings["OUT"]
  end

  # @return [JBIterable<DasObject>]
  def rows
    @bindings["ROWS"]
  end

  # @return [Boolean]
  def transposed
    @bindings["TRANSPOSED"]
  end

  def method_missing(name, *args)
    @bindings[name.to_s]
  end
end

# noinspection RubyResolve
binding = RSimpleBindings.new(bindings)
SELECTION = binding.selection
OUT = binding.out
ROWS = binding.rows
TRANSPOSED = binding.transposed
FORMATTER = binding.formatter
PROJECT = binding.project
FILES = binding.files
CLIPBOARD = binding.clipboard
LOG = binding.log
DIALECT = binding.dialect
TABLE = binding.table
ALL_COLUMNS = binding.all_columns
COLUMNS = binding.columns


