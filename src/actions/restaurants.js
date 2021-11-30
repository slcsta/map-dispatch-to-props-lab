// using an action creator method here to DRY up our code
// here we are adding an addRestaurant method 
// the addRestaurant action creator returns 
// an action object with a type of 'ADD_RESTAURANT'
// and a restaurant payload taken from our local state.
// Then we need to update our handleOnSubmit method to use our action creator

export const addRestaurant = (restaurant) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
