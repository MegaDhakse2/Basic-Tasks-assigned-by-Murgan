def eliminateSimilarSubarray(user_sub_array, existing_array)
  user_sub_array = user_sub_array
  existing_array = existing_array

  for i in 0..(existing_array.length-user_sub_array.length)
    if existing_array[i,user_sub_array.length] == user_sub_array
      existing_array.slice!(i,user_sub_array.length)
    end  
  end
  return existing_array

end
p eliminateSimilarSubarray([3,4],[1,2,3,4,1,2,3,4,4,3])






# dummy_array = []
# for i in 0..user_array.length - 1
#     for j in 0..existing_array.length - 1
#         p "#{user_array[i]}"+"&"+ "#{user_array[j]}"
        
       
#     end
# end

# existing_array.each_cons(user_array.length) do  |sub_array|
# p sub_array
# if sub_array == user_array
#     p "equal"
# end
# end
# p existing_array