FROM denoland/deno

WORKDIR /app

# Install Denon
RUN deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts

ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

COPY . .

CMD ["denon", "start"]