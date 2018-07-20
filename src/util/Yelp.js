const apiKey = 'BG5JSz-c9kZZm4gynpjC00yIzR62PepoNxphv66DHaxrFeBmAAU3u42BisdD1b3Fg6JHKRwVF6P3bsF3XLjWXBMV_nmOxKmrgTV5n7WPp9f7wwI5rSnjpvAPYpS5RW3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories.title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};


export default Yelp;