import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ListaContattiComponent} from '../app/lista-contatti/lista-contatti.component';

const appRoutes: Routes = [
    {path: '', component: ListaContattiComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
