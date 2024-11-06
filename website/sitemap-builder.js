   import { SitemapStream } from 'sitemap';
   import { createWriteStream } from 'fs';

   const links = [
     { url: '/', changefreq: 'daily', priority: 1.0 },
     { url: '/sobre', changefreq: 'monthly', priority: 0.8 },
     { url: '/direito-civil', changefreq: 'monthly', priority: 0.8 },
     { url: '/direito-trabalhista', changefreq: 'monthly', priority: 0.8 },
     { url: '/direito-do-consumidor', changefreq: 'monthly', priority: 0.8 },
     { url: '/direito-previdenciario', changefreq: 'monthly', priority: 0.8 },
     { url: '/direito-previdenciario', changefreq: 'monthly', priority: 0.8 },
     { url: '/compliance-e-lgpd', changefreq: 'monthly', priority: 0.8 },
     { url: '/contato', changefreq: 'monthly', priority: 0.8 },
     // Adicione outras rotas que você deseja rastrear
   ];

   async function generateSitemap() {
     const sitemap = new SitemapStream({ hostname: 'https://valdinancarvalhoadv.com.br' });
     const writeStream = createWriteStream('./public/sitemap.xml');

     // Usar uma promise diretamente para aguardar o final do stream
     await new Promise((resolve, reject) => {
       sitemap.pipe(writeStream)
         .on('finish', resolve)
         .on('error', reject);

       // Escrever os links no stream
       links.forEach(link => sitemap.write(link));

       sitemap.end();
     });

     console.log('Sitemap gerado com sucesso!');
   }

   generateSitemap();