class AddProjectIdToList < ActiveRecord::Migration[6.1]
  def change
    add_column :lists, :project_id, :integer
  end
end
