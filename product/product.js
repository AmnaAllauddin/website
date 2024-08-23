
async function products_fun() {
    try {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const jsonData = await data.json()
        console.log(jsonData)
        const container = document.getElementById('container1')
        container.innerHTML = ""
        jsonData.forEach(product => {

            const card = document.createElement("div")
            card.className = "box"
            card.style.transition ='5px 0.3s ease';
            card.style.overflow = 'hidden';
            const image = document.createElement('img')
            image.src = product.image
            card.appendChild(image)
            const title = document.createElement('h1');
            title.textContent = product.title;
            card.appendChild(title);
            const price = document.createElement("h2")
            price.textContent = "$"+product.price
            card.appendChild(price)

            const moreInfo = document.createElement('div');
            moreInfo.style.display = 'none';

            const description = document.createElement('p');
            description.textContent = product.description;
            moreInfo.appendChild(description);

            const rating = document.createElement('b');
            rating.textContent = "Rating: " + product.rating.rate;
            moreInfo.appendChild(rating);
            const addToCartButton = document.createElement('button')
            addToCartButton.textContent = "Add to cart"
            moreInfo.appendChild(addToCartButton)

            card.appendChild(moreInfo);

             
            const showMoreButton = document.createElement('button');
            showMoreButton.textContent = "Show More";
            showMoreButton.addEventListener('click', () => {
                const isVisible = moreInfo.style.display === 'block';

                if (!isVisible) {
                    // If currently collapsed, measure expanded height
                    moreInfo.style.display = 'block';
                    const expandedHeight = card.scrollHeight;
                    card.style.height = `${expandedHeight}px`;
                    moreInfo.style.display = 'none';
                } else {
                    // If currently expanded, measure collapsed height
                    const collapsedHeight = card.scrollHeight - moreInfo.scrollHeight;
                    card.style.height = `${collapsedHeight}px`;
                }

                // Toggle moreInfo visibility
                moreInfo.style.display = isVisible ? 'none' : 'block';

                // Update button text
                showMoreButton.textContent = isVisible ? 'Show More' : 'Show Less';
            });

            card.appendChild(showMoreButton);
            container.appendChild(card);

            // Set initial height
            card.style.height = `${card.scrollHeight}px`;
        });
    }
    catch (err) {
        console.log(err)
    }
}

products_fun()
