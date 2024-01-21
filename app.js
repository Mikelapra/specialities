const express = require('express');

const app = express();

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];
  
  const specialty = (specialty) => {
    return usersData.filter(user => user.specialty==specialty)
  }

  console.log(specialty)


app.get('/', (req, res) => {

    res.send(`<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página Principal- Sprint 11 Entregable 1 </title>
        </head>
        <body>
            <h1>Página Principal de la Base de Datos de Personal</h1>
                <nav>
                    <div>Accesos a las diferentes áreas:</div>
                    <ul>
                        <li><a href ="/marketing">Marketing</a></li>
                        <li><a href ="/developers">Developers</a></li>
                        <li><a href ="/ventas">Ventas</a></li>
                        <li><a href ="/QAs">QAs</a></li>
                    </ul>
                </nav>
        </body>
        </html>`
    );
  });

app.get('/marketing', (req, res) => {
    const users = specialty("marketing");

    res.send(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Marketing- Sprint 11 Entregable 1 </title>
    </head>
    <body>
        <header>
            <a href ="/">Volver a Página Principal</a>
        </header>
        <h1>Personal de Marketing</h1>
            <div>Se dispone de ${users.length} integrantes en el area de marketing<div>
            <ul>${users.map(user => `<li>${user.name}, ${user. age} años</li>`)}</ul>
            <nav>
                <div>Accesos a otras áreas:</div>
                <ul>
                    <li><a href ="/developers">Developers</a></li>
                    <li><a href ="/ventas">Ventas</a></li>
                    <li><a href ="/QAs">QAs</a></li>
                </ul>
            </nav>
    </body>
    </html>`);
  });
  
  app.get('/developers', (req, res) => {
    const users = specialty("developers");
    res.send(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Developers- Sprint 11 Entregable 1 </title>
    </head>
    <body>
        <header>
            <a href ="/">Volver a Página Principal</a>
        </header>
        <h1>Personal de Developers</h1>
            <div>Se dispone de ${users.length} integrantes en el area de developers<div>
            <ul>${users.map(user => `<li>${user.name}, ${user. age} años</li>`).join()}</ul>
            <nav>
                <div>Accesos a otras áreas:</div>
                <ul>
                    <li><a href ="/marketing">Marketing</a></li>
                    <li><a href ="/ventas">Ventas</a></li>
                    <li><a href ="/QAs">QAs</a></li>
                </ul>
            </nav>
    </body>
    </html>`
    );
  });

  app.get('/ventas', (req, res) => {
    const users = specialty("ventas");
    res.send(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ventas - Sprint 11 Entregable 1 </title>
    </head>
    <body>
        <header>
            <a href ="/">Volver a Página Principal</a>
        </header>
        <h1>Personal de Ventas</h1>
            <div>Se dispone de ${users.length} integrantes en el area de Ventas<div>
            <ul>${users.map(user => `<li>${user.name}, ${user. age} años</li>`)}</ul>
            <nav>
                <div>Accesos a otras áreas:</div>
                <ul>
                    <li><a href ="/marketing">Marketing</a></li>
                    <li><a href ="/developers">Developers</a></li>
                    <li><a href ="/QAs">QAs</a></li>
                </ul>
            </nav>
    </body>
    </html>`
    );
  });

  app.get('/QAs', (req, res) => {
    const users = specialty("QAs");
    res.send(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QAs- Sprint 11 Entregable 1 </title>
    </head>
    <body>
        <header>
            <a href ="/">Volver a Página Principal</a>
        </header>
        <h1>Personal de QAs</h1>
            <div>Se dispone de ${users.length} integrantes en el area de QAs<div>
            <ul>${users.map(user => `<li>${user.name}, ${user. age} años</li>`)}</ul>
            <nav>
                <div>Accesos a otras áreas:</div>
                <ul>
                    <li><a href ="/marketing">Marketing</a></li>
                    <li><a href ="/developers">Developers</a></li>
                    <li><a href ="/ventas">Ventas</a></li>
                </ul>
            </nav>
    </body>
    </html>`
    );
  });
  
  app.use((req, res) => {
    console.log(req.path);
    res
      .status(404)
      .send(
        `<h1>¡Ooops!La página no ha sido encontrada.</h1> 
        <p>Ha debido haber algún error.  Por favor, revise el path ${req.path} solicitado.</p>
        <a href="/">Volver a Página Principal</a>`
      );
  });

  app.listen(3000, () => {
    console.log(`sever listening on port 3000`);
  });
  