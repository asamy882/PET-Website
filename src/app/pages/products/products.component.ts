import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { LookupService } from '../../shared/services/lookup.service';
import { ProductService } from '../../shared/services/product.service';

import { SearchProduct } from '../../shared/model/search.product.model';
import { ProductCategory } from '../../shared/model/product.category.model';
import { Lookup } from '../../shared/model/lookup.model';

import { WOW } from 'src/assets/js/wow.js';
declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  colors: Lookup [];
  materials: Lookup [];
  sizes: Lookup [];
  shapes: Lookup [];
  serverUrl: string;

  selectedColors: any[] = [];
  selectedMaterials: any[] = [];
  selectedSizes: any[] = [];
  selectedShapes: any[] = [];
  selectedPrinting: any [] = [];

  @ViewChild('Size') sizeSelectControl: any;
  @ViewChild('Color') colorSelectControl: any;
  @ViewChild('Material') materialSelectControl: any;
  @ViewChild('Printing') printingSelectControl: any;
  @ViewChild('Shape') shapeSelectControl: any;

  productCategories: ProductCategory[];
  mainProductCategories: ProductCategory[];

  searchProduct: SearchProduct = new SearchProduct();

  products: any [] = [];

  selectType: string;

  sendRequest: boolean;

  ngOnInit() {
    this.serverUrl = this.lookupService.getServerUrl();
    this.selectType = 'OurProducts';
    this.sendRequest = true;
    this.getOurProducts();
  }

  constructor(private lookupService: LookupService, private productService: ProductService) {
    }

  getOurProducts() {
    this.selectType = 'OurProducts';
    this.productService.getOurProducts(this.searchProduct).subscribe(res => {
      console.log('getOurProducts - res', res);
      if (res.Success) {
        this.products = res.Items;
       }
    });
  }

  getYourProduct() {
    this.selectType = 'YourProducts';
    this.productService.getYourProduct(this.searchProduct).subscribe(res => {
      console.log('getYourProduct - res', res);
      if (res.Success) {
        this.products = res.Items.slice(1, 12);
       }
    });
  }

  setCategoryCode(code) {
    this.searchProduct.CategoryCode = code;
    this.getOurProducts();
  }

  setMainCategoryCode(code) {
    this.searchProduct.MainCategoryCode = code;
    this.getYourProduct();
  }


  ngAfterViewInit() {
    const me = this;
    $(document).ready(function() {

    const xyz = $('.selectSize').data('name');
    $('.selectSize').select2({placeholder : xyz});
    $('.selectSize').on('select2:close', function (evt) {
      const uldiv = $(this).siblings('span.select2').find('ul');
      const count = $(this).select2('data').length;
      me.setSelectedSizes($(this).select2('data'));
      if ( count === 0 ) {
          uldiv.html(xyz);
        } else {
          uldiv.html('<li>' + xyz + '(' + count + ')</li>');
        }
      });

    const xyz2 = $('.selectMaterial').data('name');
    $('.selectMaterial').select2({placeholder : xyz2});
    $('.selectMaterial').on('select2:close', function (evt) {
      const uldiv = $(this).siblings('span.select2').find('ul');
      const count = $(this).select2('data').length;
      me.setSelectedMaterials($(this).select2('data'));
      if ( count === 0 ) {
          uldiv.html(xyz2);
        } else {
          uldiv.html('<li>' + xyz2 + '(' + count + ')</li>');
        }
      });

    const xyz3 = $('.selectPrinting').data('name');
    $('.selectPrinting').select2({placeholder : xyz3});
    $('.selectPrinting').on('select2:close', function (evt) {
      const uldiv = $(this).siblings('span.select2').find('ul');
      const count = $(this).select2('data').length;
      me.setSelectedPrinting($(this).select2('data'));
      if ( count === 0 ) {
          uldiv.html(xyz3);
        } else {
         uldiv.html('<li>' + xyz3 + '(' + count + ')</li>');
        }
      });

    const xyz4 = $('.selectOption5').data('name');
    $('.selectOption5').select2({placeholder : xyz4});
    $('.selectOption5').on('select2:close', function (evt) {
      const uldiv = $(this).siblings('span.select2').find('ul');
      const count = $(this).select2('data').length;
      me.setSelectedShapes($(this).select2('data'));
      if ( count === 0 ) {
          uldiv.html(xyz4);
        } else {
          uldiv.html('<li>' + xyz4 + '(' + count + ')</li>');
        }
      });

    const xyz5 = $('.selectColor').data('name');
    $('.selectColor').select2({placeholder : xyz5});
    $('.selectColor').on('select2:close', function (evt) {
      const uldiv = $(this).siblings('span.select2').find('ul');
      const count = $(this).select2('data').length;
      me.setSelectedColors($(this).select2('data'));
      if ( count === 0 ) {
         uldiv.html(xyz5);
        } else {
          uldiv.html('<li>' + xyz5 + '(' + count + ')</li>');
        }
      });

  });
    new WOW().init();

    this.colors = this.lookupService.getProductColors();
    this.materials = this.lookupService.getProductMaterials();
    this.sizes = this.lookupService.getProductSizes();
    this.shapes = this.lookupService.getProductShapes();
    this.productCategories = this.lookupService.getProductCategories();
    this.mainProductCategories = this.lookupService.getMainProductCategories();
  }

  public clearFilters() {
    this.sendRequest = false;
    let length = this.selectedSizes.length;
    for (let i = length ; i > 0; i--) {
      this.removeitemFromSelectedSizes(i - 1);
    }

    length = this.selectedColors.length;
    for (let i = length ; i > 0; i--) {
      this.removeitemFromSelectedColors(i - 1);
    }

    length = this.selectedMaterials.length;
    for (let i = length ; i > 0; i--) {
      this.removeitemFromSelectedMaterials(i - 1);
    }

    length = this.selectedPrinting.length;
    for (let i = length ; i > 0; i--) {
      this.removeitemFromSelectedPrinting(i - 1);
    }

    length = this.selectedShapes.length;
    for (let i = length ; i > 0; i--) {
      this.removeitemFromSelectedShapes(i - 1);
    }
    this.sendRequest = true;
    this.getProducts();
  }

  private prepareSearchReques() {
    this.selectedSizes.forEach(e => {
      this.searchProduct.Sizes.push(e.id);
    });
    this.selectedColors.forEach(e => {
      this.searchProduct.Colors.push(e.id);
    });
    this.selectedMaterials.forEach(e => {
      this.searchProduct.Materials.push(e.id);
    });
    this.selectedPrinting.forEach(e => {
      this.searchProduct.Printed.push(e.id);
    });
    this.selectedShapes.forEach(e => {
      this.searchProduct.Shapes.push(e.id);
    });
  }

  public getProducts(): void {
    if (!this.sendRequest) {
      return;
  }
    this.prepareSearchReques();
      if (this.selectType === 'OurProducts') {
        this.getOurProducts();
    } else {
      this.getYourProduct();
    }
  }

  public setSelectedSizes(selectedSizes): void {
    this.selectedSizes = selectedSizes;
    this.searchProduct.Sizes = [];
    this.getProducts();
  }

  public removeitemFromSelectedSizes(index): void {
    this.selectedSizes.splice(index, 1);
    this.getProducts();
    this.sizeSelectControl.nativeElement.selectedOptions[index].selected = false;
    const xyz = $('.selectSize').data('name');
    const uldiv = $('.selectSize').siblings('span.select2').find('ul');
    const count = this.selectedSizes.length;
    if ( count === 0 ) {
          uldiv.html(xyz);
        } else {
          uldiv.html('<li>' + xyz + '(' + count + ')</li>');
        }
  }

  public setSelectedColors(selectedColors): void {
    this.selectedColors = selectedColors;
    this.searchProduct.Colors = [];
    this.getProducts();
  }

  public removeitemFromSelectedColors(index): void {
    this.selectedColors.splice(index, 1);
    this.getProducts();
    this.colorSelectControl.nativeElement.selectedOptions[index].selected = false;
    const xyz = $('.selectColor').data('name');
    const uldiv = $('.selectColor').siblings('span.select2').find('ul');
    const count = this.selectedColors.length;
    if ( count === 0 ) {
          uldiv.html(xyz);
        } else {
          uldiv.html('<li>' + xyz + '(' + count + ')</li>');
        }
  }

  public setSelectedMaterials(selectedMaterials): void {
    this.selectedMaterials = selectedMaterials;
    this.searchProduct.Materials = [];
    this.getProducts();
  }

  public removeitemFromSelectedMaterials(index): void {
    this.selectedMaterials.splice(index, 1);
    this.getProducts();
    this.materialSelectControl.nativeElement.selectedOptions[index].selected = false;
    const xyz = $('.selectMaterial').data('name');
    const uldiv = $('.selectMaterial').siblings('span.select2').find('ul');
    const count = this.selectedMaterials.length;
    if ( count === 0 ) {
          uldiv.html(xyz);
        } else {
          uldiv.html('<li>' + xyz + '(' + count + ')</li>');
        }
  }

  public setSelectedPrinting(selectedPrinting): void {
    this.selectedPrinting = selectedPrinting;
    this.searchProduct.Printed = [];
    this.getProducts();
  }

  public removeitemFromSelectedPrinting(index): void {
    this.selectedPrinting.splice(index, 1);
    this.getProducts();
    this.printingSelectControl.nativeElement.selectedOptions[index].selected = false;
    const xyz = $('.selectPrinting').data('name');
    const uldiv = $('.selectPrinting').siblings('span.select2').find('ul');
    const count = this.selectedPrinting.length;
    if ( count === 0 ) {
          uldiv.html(xyz);
        } else {
          uldiv.html('<li>' + xyz + '(' + count + ')</li>');
        }
  }

  public setSelectedShapes(selectedShapes): void {
    this.selectedShapes = selectedShapes;
    this.searchProduct.Shapes = [];
    this.getProducts();
  }

  public removeitemFromSelectedShapes(index): void {
    this.selectedShapes.splice(index, 1);
    this.getProducts();
    this.shapeSelectControl.nativeElement.selectedOptions[index].selected = false;
    const xyz = $('.selectShape').data('name');
    const uldiv = $('.selectShape').siblings('span.select2').find('ul');
    const count = this.selectedShapes.length;
    if ( count === 0 ) {
          uldiv.html(xyz);
        } else {
          uldiv.html('<li>' + xyz + '(' + count + ')</li>');
        }
  }

}
