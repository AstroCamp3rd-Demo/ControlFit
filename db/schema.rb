# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_16_140114) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "food_databases", force: :cascade do |t|
    t.string "name"
    t.decimal "calories"
    t.decimal "protein"
    t.decimal "fat_content"
    t.decimal "carbohydrate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "food_type"
  end

  create_table "food_records", force: :cascade do |t|
    t.string "name"
    t.decimal "calories"
    t.integer "qty"
    t.string "eat_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sports", force: :cascade do |t|
    t.string "name"
    t.string "consume"
    t.string "consume_40kg"
    t.string "consume_50kg"
    t.string "consume_60kg"
    t.string "consume_70kg"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
