const reviewsRouter = require('express').Router();
const axios = require('axios');
require('dotenv').config()
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';



reviewsRouter.get('/getAllReviews', (req, res) => {
  let productId = 37312;
  let options = {
    headers: { Authorization: process.env.TOKEN},
    params: {
      product_id: productId,
      count: req.query.count,
      sort: req.query.sort,
      page: req.query.page
    }
  };


  axios.get(basePath + '/reviews', options)
    .then((response) => {
      res.send(response.data.results);
    })
    .catch((err) => {
      console.log('axios GET reviews failed');
      res.status(400).send(err);
    });
});


reviewsRouter.get('/getRatings', (req, res) => {
  // let productId = parseInt(req.query.product_id);
  let productId = 37315;
  let options = {
    headers: { Authorization: process.env.TOKEN},
    params: {
      product_id: productId,
    }
  };

  axios.get(basePath + '/reviews/meta', options)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log('axios GET reviews failed');
      res.status(400).send(err);
    });
});

reviewsRouter.post('/reviews', (req,res) => {

  const options = {
    headers: { Authorization: process.env.TOKEN },
  };

  const requestData = req.body;

  axios.post(basePath + '/reviews', requestData, options)
    .then((response) => {
      res.status(201).send(response.data); // Successfully created
    })
    .catch((err) => {
      console.log('axios POST reviews failed:', err);
      res.status(400).send(err);
    });

});

reviewsRouter.put('/updateHelpful/:review_id', (req, res) => {
  const reviewId = req.params.review_id;

  const options = {
    headers: { Authorization: process.env.TOKEN },
  };

  axios.put(`${basePath}/reviews/${reviewId}/helpful`, {}, options)
    .then(() => {
      res.sendStatus(204); // Successfully updated
    })
    .catch((err) => {
      console.log('axios PUT updateHelpful failed:', err);
      res.status(400).send(err);
    });
});

module.exports = reviewsRouter;
