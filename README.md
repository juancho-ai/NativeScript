# Proyecto NativeScript + Angular + Web (SideDrawer Modularizado)

Proyecto estructurado bajo la plantilla `template-drawer-navigation-ng` con coexistencia Mobile y Web.

## Cumplimiento de requerimientos del módulo

1. **Basado en `template-drawer-navigation-ng`**: Enrutador modularizado (`app-routing.module.ts`) con carga diferida (`loadChildren`) y navegación lateral `RadSideDrawer`.
2. **Al menos 2 componentes nuevos**:
   - `src/app/catalogo/catalogo.component.ts`
   - `src/app/catalogo/detalle-item/detalle-item.component.ts`
3. **Nuevo módulo de features/funcionalidad**: `src/app/catalogo/catalogo.module.ts` (`CatalogoModule`).
4. **Submódulo específico de ruteo**: `src/app/catalogo/catalogo-routing.module.ts` (`CatalogoRoutingModule`).
5. **Integración al SideDrawer preexistente**: Enlace añadido en `src/app/app.component.html` y lógica en `src/app/app.component.ts` con ruta `/catalogo`.
6. **Nuevo servicio global con inyección de dependencias**: `src/app/services/catalogo-datos.service.ts` con `@Injectable({ providedIn: 'root' })`.
7. **Vista con `*ngFor`**: Implementada en `src/app/catalogo/catalogo.component.html` (y versión web en `.web.html`).
8. **Archivo CSS con sobrecarga de nombres para Android e iOS**:
   - `src/app/catalogo/catalogo.component.android.css`
   - `src/app/catalogo/catalogo.component.ios.css`
   - `src/app/catalogo/catalogo.component.css` (base)
9. **Ícono personalizado en `App_Resources`**:
   - `App_Resources/Android/src/main/res/drawable-nodpi/ic_catalogo_custom.png`
   - `App_Resources/Android/src/main/res/drawable-nodpi/splash_screen.xml`
   - `App_Resources/iOS/Assets.xcassets/ic_catalogo_custom.imageset/ic_catalogo_custom.png`
10. **Código condicional solo para Android en componente TypeScript**: Implementado en `src/app/catalogo/catalogo.component.ts` usando `isAndroid` de `@nativescript/core` para asignar una variable de estado/mensaje exclusiva de Android.
