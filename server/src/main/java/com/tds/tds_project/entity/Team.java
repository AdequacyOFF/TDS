package com.tds.tds_project.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name = "team")
public class Team {
    @Id
    @Column(name = "team_id")
    @JsonProperty("id")
    private Integer id;

    @Column(name = "t_name", nullable = false)
    @JsonProperty("name")
    private String name;

    @Column(name = "lead_id", nullable = false)
    @JsonProperty("leadId")
    private Integer leadId;

    // Геттеры и сеттеры
}