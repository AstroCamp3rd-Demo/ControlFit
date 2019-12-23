class RecordDatabasesController < ApplicationController
    def index
    end
  
    def show
    end
  
    def new
    end
  
    def edit
    end

    def create
    end

  
    def updata
    end
  
    def destroy
    end

    def search_food
          
        # 搜尋食物

        @search_food = params["search_food"]
        @food_databases = []
        if @search_food.present?
          @food_databases = FoodDatabase.where("name ILIKE ?", "%#{@search_food}%")
        end
        #---------------------------------------
        @record_foods = FoodRecord.where(created_at: Time.now.midnight..Time.now)
        # 搜尋到現在時間為止的今天食物紀錄
        @sum=0
        @record_foods.each do |record_food|
           @sum = @sum + record_food.total_calorie
        end
        
        #---------------------------------------



    end

    def search_sport
      @search_sport = params["search_sport"]
      @sports = []
      # if @search_sport.present?
      #   @sports= Sport.where("name ILIKE ?", "%#{@search_sport}%")
      # end
    end
    
end
