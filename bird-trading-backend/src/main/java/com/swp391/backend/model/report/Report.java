package com.swp391.backend.model.report;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.swp391.backend.model.product.Product;
import com.swp391.backend.model.product.ProductDTO;
import com.swp391.backend.model.shop.Shop;
import com.swp391.backend.model.user.User;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Report {
    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "user_Id")
    private User reporter;

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "shop_id")
    private Shop shop;

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "product_id")
    private Product product;


    private String reasonType;
    private String reasonSpecific;
    private String action;

    public ReportDTO toDto()
    {
        ProductDTO productDTO = ProductDTO.builder()
                .id(product.getId())
                .name(product.getName())
                .images(product.getImages())
                .shop(product.getShop().toDto())
                .build();

        ReportDTO reportDTO = ReportDTO
                .builder()
                .id(id)
                .reporter(reporter.toDto())
                .product(productDTO)
                .reasonType(reasonType)
                .reasonSpecific(reasonSpecific)
                .build();

        return reportDTO;
    }
}
