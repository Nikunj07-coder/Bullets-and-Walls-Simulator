function IsTouching(moving_Rect,fixed_Rect){
    if(moving_Rect.x-fixed_Rect.x<moving_Rect.width/2+fixed_Rect.width/2 && 
      fixed_Rect.x-moving_Rect.x<moving_Rect.width/2+fixed_Rect.width/2 &&
      moving_Rect.y-fixed_Rect.y<moving_Rect.height/2+fixed_Rect.height/2 && 
      fixed_Rect.y-moving_Rect.y<moving_Rect.height/2+fixed_Rect.height/2 ){
      return true
    }
  
    else{
      return false
    }
  }