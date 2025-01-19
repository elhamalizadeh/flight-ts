<!-- components/Card.vue -->
<template>
          <div class="card">
            <img :src="image" alt="Card image" class="card-image" />
            <div class="card-content">
              <h3 class="card-title">{{ title }}</h3>
              <p class="card-description">{{ description }}</p>
            </div>
          </div>
        </template>
        
        <script>
        export default {
          props: {
            title: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
            image: {
              type: String,
              required: true,
            },
          },
        };
        </script>
        
        <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          width: 300px;
        }
        
        .card-image {
          width: 100%;
          height: auto;
        }
        
        .card-content {
          padding: 16px;
        }
        
        .card-title {
          margin: 0 0 8px;
          font-size: 1.25em;
        }
        
        .card-description {
          margin: 0;
          color: #555;
        }
        </style>
        