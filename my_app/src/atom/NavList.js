// All the Group in project! You can adjust the Group (ex: genre=action ...)
// Group_key_arr : array about all the Keys in Group_obj

const Group_obj = { "High Rating": "minimum_rating=8", "Romance": "genre=romance", "Music": "genre=music", "Animation": "genre=animation" };
const Group_key_arr = Object.keys(Group_obj);

export {Group_obj, Group_key_arr};