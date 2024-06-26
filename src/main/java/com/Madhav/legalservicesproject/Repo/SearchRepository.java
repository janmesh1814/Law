package com.Madhav.legalservicesproject.Repo;

import com.Madhav.legalservicesproject.Model.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SearchRepository {
    public List<User> findLawyers_filterByLocation(String location);
}
