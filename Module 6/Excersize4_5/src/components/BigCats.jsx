import { useState } from "react";
import NewCatForm from "./NewCatForm";

function BigCats() {
  const originalCats = [ 
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

  const [cats, setCats] = useState([...originalCats]); //4 Clone the original array before changing
  const [sortAsc, setSortAsc] = useState(true); //4 useState for the sort & filter functions 
  const [filter, setFilter] = useState("All");
  



  //4.1 Sort function
  const handleSort = () => {
    const sortedCats = [...cats].sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setCats(sortedCats);
    setSortAsc(!sortAsc);
  };

  // 4.2 Filter function
  const handleFilterChange = (e) => {
    setFilter(e.target.value); //note to self e = event
  };

  // Filtered array (based on current filter)
  const filteredCats = cats.filter((cat) => {
    if (filter === "All") return true;
    return cat.latinName.toLowerCase().includes("panthera");
  });

    //5.1 New Cat form 
  const handleAddCat = (newCat) => {
    newCat.id = cats.length + 1;
    setCats([...cats, newCat]);
  };

    //5.2 Delete a cat. 
  const handleDeleteCat = (id) => {
  setCats(cats.filter(cat => cat.id !== id));
  };

  return (
    <>
      <div>
        <button onClick={handleSort}>
          Sort {sortAsc ? "Z-A" : "A-Z"}
          {/* 4.1 sort from A-Z or Z-A, call handleSort function on click */}
        </button>

        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All Cats</option>
          <option value="Panthera">Panthera Family</option>
          {/* 4.2 on value change call filter function */}
        </select>
      </div>
<div>
  {/* 5.1 New cat - render form */}
   <NewCatForm onAddCat={handleAddCat} />
</div>
      <ul>
        {filteredCats.map((cat) => (
          <Cat
            key={cat.id}
            id={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
            onDelete={handleDeleteCat} //5.2 pass delete function as prop to each cat 
          />
        ))}
      </ul>
    </>
  );
}

function Cat({ id, name, latinName, image, onDelete }) {
  return (
    <li>
      <h2>{name}</h2>
      <h3><i>{latinName}</i></h3>
      <img src={image} alt={name} width="300" />
      <button onClick={() => onDelete(id)}>Delete Big Cat</button>
    </li>
  );
}

export default BigCats;