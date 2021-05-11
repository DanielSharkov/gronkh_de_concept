FROM nginx:alpine

# Prepare
RUN rm -f /etc/nginx/nginx.conf && mkdir -p /var/www/gronkhapp/{dist,assets/images}

# Replace nginx configs
COPY nginx.conf /etc/nginx

# Add site
COPY index.html /var/www/gronkhapp
ADD /dist /var/www/gronkhapp/dist
COPY /assets/images /var/www/gronkhapp/assets/images

EXPOSE 80 443
