class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let isInTheArticle = false;
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!")
        }

        for (const el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                el.quantity += Number(quantity);
                isInTheArticle = true;
            }
        }
        if (!isInTheArticle) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        return (`Successfully added article ${articleName} with a new quantity- ${quantity}.`)
    }

    inviteGuest(guestName, personality) {
        let points = 0;

        for (const el of this.guests) {
            if (el.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }

        let obj = {guestName, points: 0, purchaseArticle: 0};

        switch(personality){
            case 'Vip': obj.points = 500; break;
            case 'Middle': obj.points = 250; break;
            default: obj.points = 50; break;
        }

        this.guests.push(obj)


        return (`You have successfully invited ${guestName}!"`)
    }

    buyArticle(articleModel, articleName, guestName) {
        let isInListArr = false;
        let isInGuestList = false;
        let article;
        let guest;
        for (const el of this.listOfArticles) {
            if (el.articleModel !== articleModel || el.articleName !== articleName) {
                isInListArr = false;
            }
            else {
                isInListArr = true;
                article = el;
                break;
            }
        }

        if (!isInListArr) {
            throw new Error(`This article is not found.`)
        }
        if (article.quantity === 0) {
            return (`The ${articleName} is not available.`)
        }
        for (const el of this.guests) {
            if (el.guestName !== guestName) {
                isInGuestList = false;
            } else {
                guest = el;
                isInGuestList = true;
                break;
            }
        }

        if (!isInGuestList) {
            return ('This guest is not invited.')
        }

        if (gust.points < this.possibleArticles[articleModel]) {
            return ('You need to more points to purchase the article.');
        } else {
            gust.points -= this.possibleArticles[articleModel];
            article.quantity--;
            guest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`

    }

}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));



