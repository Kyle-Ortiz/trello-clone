class RemoveIndexFromCards < ActiveRecord::Migration[6.1]
  def change
    remove_index :cards, name: "index_cards_on_list_id"
  end
end
