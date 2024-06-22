package com.Madhav.legalservicesproject.Repo;

import com.Madhav.legalservicesproject.Model.User;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;
import org.bson.Document;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class SearchRepoImplementation implements SearchRepository{
    @Autowired
    MongoClient mongoClient;
    @Autowired
    MongoConverter converter;
    @Override
    public List<User> findLawyers_filterByLocation(String location){
        List<User> list = new ArrayList<>();
        MongoDatabase database = mongoClient.getDatabase("LegalServicesProject");
        MongoCollection<Document> collection = database.getCollection("User");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                        new Document("compound",
                                new Document("must", Arrays.asList(new Document("text",
                                                new Document("query", location)
                                                        .append("path", "City")),
                                        new Document("text",
                                                new Document("query", "Lawyer")
                                                        .append("path", "Profession")))))),
                new Document("$limit", 100L)));
        result.forEach(doc -> list.add(converter.read(User.class,doc)));
        return list;
    }
}
