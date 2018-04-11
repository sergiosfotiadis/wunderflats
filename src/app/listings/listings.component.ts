import {Component, OnInit} from '@angular/core';
import {ListingService} from '../services/listing/listing.service';

@Component({
    selector: 'app-listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
    listings = [];
    loading = false;
    message = "";
    constructor(private listingService: ListingService) {
    }

    ngOnInit() {
    }

    loadListings() {
        this.getListings();
    }

    private getListings(): void {
        this.listings = [];
        this.message = "";
        let _listings = [];
        this.loading = true;
        this.listingService.getListings()
            .subscribe(data => {
                    if (data.status === 200 && data.body) {
                        _listings = data.body.listings;
                        if (_listings.length !== 0) {
                            for (let i = 0; i < _listings.length; i++) {
                                const item = {
                                    titleEn: _listings[i].title.en
                                };
                                this.listings.push(item);
                            }
                            this.loading = false;
                        }
                    } else {
                        this.loading = false;
                        this.message = data;
                    }
                }, error => {
                    this.loading = false;
                    console.log(error);
                    alert(error);
                }
            );
    }
}
