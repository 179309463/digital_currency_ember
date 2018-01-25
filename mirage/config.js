export default function() {
  this.namespace = '/api';
 
  let rentals = [
      {
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          category: 'Estate',
          bedrooms: 15,
          image: '/frontend/assets/logo.png',
          description: 'This grand old mansion'
        }
      },
      {
        type: 'rentals',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike TV',
          city: 'Seattle',
          category: 'Condo',
          bedrooms: 1,
          image: '/frontend/assets/logo.png',
          description: 'A commuters dream'
        }
      }
  ];  

  this.get("/rentals", function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i){
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return {data: filteredRentals};
    }else{
      return {data: rentals};
    }
  });  

  this.get("/rentals/:id", function(db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });

}
