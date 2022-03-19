GRANT ALL PRIVILEGES ON DATABASE mbordados TO mbordados;

-- drop table if exists designs;
-- drop type permitted_categories

-- limiting the measure types to 2 
create type permitted_measures as enum ('cm', 'in');
create type permitted_categories as enum ('Appliques', 'Arte', 'Barras', 'Imagens', 'Linhas', 'Projetos', 'Semaninhas', 'Tags', 'Textos');

create table designs (
	design_id 	serial primary key,
	code 		varchar(20) not null,
	category 	permitted_categories not null,
	name 		varchar(50) not null,
	image_location 	varchar(200) not null,
	file_location 	varchar(200) not null,
	description 	text,
	last_price 	numeric(10,2) default 0.00,
	actual_price 	numeric(10,2) not null,
	height 		real not null,
	width 		real not null,
	measure 	permitted_measures not null default 'cm',
	availability 	boolean, 
	offer 		boolean,
	creation_date 	TIMESTAMP default current_timestamp
	
);

insert into designs (code, category, name, image_location, file_location, description, 
			actual_price, height, width, availability, offer) values 
('Art1', 'Arte', 'Arara', '../adm_files/design_images/matriz1.jpg','../adm_files/design_files/Arte_Arara_vermelha 13x18cm.zip', 'Arara Voando - indicada para camisetas ou toalhas',
 8.00, 13.0, 18.0, True, False),
('Art2', 'Arte', 'Borboleta', '../adm_files/design_images/matriz3.jpg','../adm_files/design_files/Arte_Borboleta Amarela 13x18cm.zip', 'Borboleta com asa abertas - indicada para quadros',
 10.00, 13.0, 18.0, True, False),
('Barra1', 'Barras', 'Barrinha Copas', '../adm_files/design_images/matriz2.jpg','../adm_files/design_files/Barrinha Copas 20x10cm.zip', 'Porta Copo Copas - repouso de copo temático',
 5.00, 20.0, 10.0, True, True),
('Linhas1', 'Linhas', 'Cachorro Sorrindo', '../adm_files/design_images/matriz4.jpg','../adm_files/design_files/Linhas_Cachorro_sorrindo 6x8cm.zip', 'Desenho em linhas sem preenchimento - indicado para máscaras',
 5.00, 6.0, 8.0, True, True);

select * from designs