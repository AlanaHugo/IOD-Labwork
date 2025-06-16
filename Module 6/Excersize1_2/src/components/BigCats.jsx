function BigCats() {
  const cats = [ 
    { id: 1, 
      name: "Cheetah", 
      latinName: "Acinonyx jubatus", 
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/1280px-Male_cheetah_facing_left_in_South_Africa.jpg" },

    { id: 2, 
      name: "Cougar", 
      latinName: "Puma concolor",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/1280px-Mountain_Lion_in_Glacier_National_Park.jpg"},
    
    { id: 3, 
      name: "Jaguar", 
      latinName: "Panthera onca",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg" },

    { id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/800px-African_leopard_male_%28cropped%29.jpg" },
    
    { id: 5, 
      name: "Lion", 
      latinName: "Panthera leo" ,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Okonjima_Lioness.jpg/500px-Okonjima_Lioness.jpg"},
    
    { id: 6, 
      name: "Snow leopard", 
      latinName: "Panthera uncia",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1024px-Irbis4.JPG" },
    
    { id: 7, 
      name: "Tiger", 
      latinName: "Panthera tigris",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1280px-Walking_tiger_female.jpg" },
  ];

return (
    <ul>
      {cats.map(cat => (
        <Cat
          key={cat.id}
          name={cat.name}
          latinName={cat.latinName}
          image={cat.image}
        />
      ))}
    </ul>
  );


// Separate Cat component for single cat
function Cat({ name, latinName, image }) {
  return (
    <li>
      <h2>{name}</h2>
      <h3><i>{latinName}</i></h3>
      <img src={image} alt={name} width="300" />
    </li>
  );
}
}

export default BigCats;