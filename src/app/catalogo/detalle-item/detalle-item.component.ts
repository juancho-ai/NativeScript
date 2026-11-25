import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { CatalogoDatosService, ProductoItem } from '../../services/catalogo-datos.service';

@Component({
  selector: 'ns-detalle-item',
  templateUrl: './detalle-item.component.html'
})
export class DetalleItemComponent implements OnInit {
  item: ProductoItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private catalogoService: CatalogoDatosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.item = this.catalogoService.obtenerItemPorId(id);
  }

  volver(): void {
    this.routerExtensions.back();
  }
}
