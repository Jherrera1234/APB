# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.f


Part.destroy_all
Category.destroy_all
Car.destroy_all
User.destroy_all


@admin = User.create!(username:'jorge', email:'root@gmail.com', password:'123456')

puts "#{User.count} user(s) created" 

@car1 = Car.create!(make: "Mitsubishi", model: "Evo-Lancer", img_url:"https://images.unsplash.com/photo-1627008450028-f88d6174ca67?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWl0c3ViaXNoaSUyMGV2b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", year: "2008", user: @admin)
@car2 = Car.create!(make: "Toyota", model: "Supra Mk5", img_url:"https://images.unsplash.com/photo-1596639410348-8470f7fa9f84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN1cHJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", year: "2020", user: @admin)

puts "#{Car.count} cars created" 

@engine = Category.create!(name: "Engine")
@turbo = Category.create!(name: "Turbo")
@suspension = Category.create!(name: "Suspension")
@tires = Category.create!(name: "Tires")

puts "#{Category.count} categories created" 

Part.create!(name: "Paccar MX13 Turbocharger", price: 400, description: "A very good turbo, gave me that extra horse power", img_url: "https://media.istockphoto.com/photos/turbocharger-on-white-picture-id157404179?b=1&k=20&m=157404179&s=170667a&w=0&h=bKFsdYDUMjIxGgbM5rCkiu8COHYGkCBXGYvuBdIIvYE=", rating:4, car:@car2, category:@turbo)
Part.create!(name: "Summit Racing SUM-260050", price: 500, description: "An amazing turbo, blew my comptetion out the water", img_url: "https://media.istockphoto.com/photos/huge-turbocharger-picture-id172343326?b=1&k=20&m=172343326&s=170667a&w=0&h=j4p448kK4nQ5H-PEhSKUE4GEyBxZ9nvav-B1BRTnJ1w=", rating:5, car:@car1, category:@turbo)
Part.create!(name: "Vtec I-6", price: 5000, description: "Great engine just hard time installing it in but still gave me what I wanted", img_url: "https://images.unsplash.com/photo-1600377232142-164c095e686e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW5naW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", rating:4, car:@car1, category:@engine)
Part.create!(name: "3.0L DOHC 24-valve I-6", price: 0, description: "Love the Supra's stock engine", img_url: "https://images.unsplash.com/photo-1623000411680-3c560fe286c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGVuZ2luZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", rating:4, car:@car2, category:@engine)
Part.create!(name: "WORKS/Ohlins SPORT R&T Coilover Suspension ", price: 600, description: "Good suspension for track day but not durable for everyday use", img_url: "https://cdn3.volusion.com/jscey.hhylf/v/vspfiles/photos/227.101-2.jpg?v-cache=1561568177", rating:4, car:@car1, category:@suspension)
Part.create!(name: "Coilover Compatible for Toyota Supra A80 93-98 Lexus sc300 sc400 Adjustable Height ShockS", price: 200, description: " love the control that this gives me", img_url: "https://www.google.com/aclk?sa=l&ai=DChcSEwiNjJOQgrTzAhUdcW8EHbBaD_8YABAOGgJqZg&sig=AOD64_3_9m2Jw082l7bb0OAu1T2nFKP2kQ&adurl&ctype=5&ved=2ahUKEwi0h4SQgrTzAhURP80KHcfPAnYQvhd6BAgBEGk", rating:5, car:@car2, category:@suspension)
Part.create!(name: "AZENIS RT660 - SIZE: 225/45ZR15", price: 200, description: "Alright gets the job done", img_url: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm6mEhLTzAhV3e28EHeXmBCkYABAFGgJqZg&sig=AOD64_3NGHFSDxFxMfVjjqNwCF0eBOt9Pw&adurl&ctype=5&ved=2ahUKEwjr0JuEhLTzAhWEpK0KHZDqBGYQvhd6BAgBEEI", rating:4, car:@car1, category:@tires)
Part.create!(name: "PILOT SPORT CUP 2 R - SIZE: 285/35ZR19", price: 400, description: "Love these tires but a little on the pricey side", img_url: "https://www.google.com/aclk?sa=l&ai=DChcSEwjhncOYg7TzAhVFbG8EHSzXAOgYABAEGgJqZg&sig=AOD64_0MOsaMTvrvNrC7geHR68IPjxBT8Q&adurl&ctype=5&ved=2ahUKEwjti7SYg7TzAhUTUM0KHUeBB0EQvhd6BAgBEEY", rating:4, car:@car2, category:@tires)

puts "#{Part.count} parts created" 




