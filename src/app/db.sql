CREATE TABLE articoli
(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Categoria VARCHAR(255) NOT NULL,
    SottoCategoria VARCHAR(255) NOT NULL,
    Prezzo DECIMAL(10, 2) NOT NULL
);

INSERT INTO articoli (Nome, Categoria, SottoCategoria, Prezzo) VALUES
('Panino con salamella', 'Cibo', 'Panini', 5.00),
('Panino vegetariano', 'Cibo', 'Panini', 4.50),
('Grigliata mista', 'Cibo', 'Secondi', 10.00),
('Patatine fritte', 'Cibo', 'Contorni', 2.50),
('Tiramisù', 'Cibo', 'Dolci', 3.00),

('Birra media', 'Bevande', 'Alcoliche', 3.50),
('Spritz', 'Bevande', 'Alcoliche', 4.00),
('Coca-Cola lattina', 'Bevande', 'Analcoliche', 2.00),
('Acqua naturale', 'Bevande', 'Analcoliche', 1.00),
('Caffè espresso', 'Bevande', 'Calde', 1.20);
