import { Injectable } from '@angular/core';

export interface ProductoItem {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatalogoDatosService {
  private readonly items: ProductoItem[] = [
    {
      id: 1,
      nombre: 'Arquitectura Multiplataforma',
      categoria: 'Mobile & Web',
      precio: 120,
      descripcion: 'Configuración compartida entre NativeScript y Angular Web mediante módulos desacoplados.'
    },
    {
      id: 2,
      nombre: 'Navegación RadSideDrawer',
      categoria: 'UI / UX',
      precio: 85,
      descripcion: 'Menú lateral modularizado con carga diferida (Lazy Loading) de features.'
    },
    {
      id: 3,
      nombre: 'Estilos Nativos por Plataforma',
      categoria: 'Android / iOS',
      precio: 95,
      descripcion: 'Sobrecarga de hojas de estilo (.android.css y .ios.css) para personalizar cada sistema operativo.'
    },
    {
      id: 4,
      nombre: 'Detección de Plataforma Nativa',
      categoria: 'Core SDK',
      precio: 110,
      descripcion: 'Ejecución condicional en TypeScript utilizando las banderas isAndroid e isIOS.'
    }
  ];

  obtenerItems(): ProductoItem[] {
    return this.items;
  }

  obtenerItemPorId(id: number): ProductoItem | undefined {
    return this.items.find((item) => item.id === id);
  }
}
