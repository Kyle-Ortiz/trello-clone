class AddListIdtoCards < ActiveRecord::Migration[6.1]
  def change
    add_column :cards, :list_id, :integer
  end
end
