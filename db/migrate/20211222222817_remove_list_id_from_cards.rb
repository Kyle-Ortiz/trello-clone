class RemoveListIdFromCards < ActiveRecord::Migration[6.1]
  def change
    remove_column :cards, :list_id
  end
end
